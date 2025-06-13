<?php
// Depuración: Verifica si los datos llegan
var_dump($_POST);
var_dump($_FILES);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Conexión a la base de datos
    $servername = "localhost";
    $username = "root";
    $password = ""; // Cambia si configuraste una contraseña
    $dbname = "formulario_medico";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Conexión fallida: " . $conn->connect_error);
    }

    // Sanitizar y preparar datos
    $nombre = $conn->real_escape_string($_POST['nombre'] ?? '');
    $rfc = $conn->real_escape_string($_POST['rfc'] ?? '');
    $especialidad = !empty($_POST['especialidad_otro']) ? $conn->real_escape_string($_POST['especialidad_otro']) : $conn->real_escape_string($_POST['especialidad'] ?? '');
    $fraccionamiento = !empty($_POST['fraccionamiento_otro']) ? $conn->real_escape_string($_POST['fraccionamiento_otro']) : $conn->real_escape_string($_POST['fraccionamiento'] ?? '');
    $email = $conn->real_escape_string($_POST['email'] ?? '');
    $cp = $conn->real_escape_string($_POST['cp'] ?? '');
    $telefonos_fijos = $conn->real_escape_string($_POST['telefonos_fijos'] ?? '');
    $telefono_emergencias = $conn->real_escape_string($_POST['telefono_emergencias'] ?? '');
    $telefono_mensajes = $conn->real_escape_string($_POST['telefono_mensajes'] ?? '');
    $num_ext = $conn->real_escape_string($_POST['num_ext'] ?? '');
    $num_int = $conn->real_escape_string($_POST['num_int'] ?? '');
    $estado = $conn->real_escape_string($_POST['estado'] ?? '');
    $municipio = $conn->real_escape_string($_POST['municipio'] ?? '');
    $fecha_inicio = $conn->real_escape_string($_POST['fecha_inicio'] ?? '');
    $cedula_profesional = $conn->real_escape_string($_POST['cedula_profesional'] ?? '');
    $cedula_especialidad = $conn->real_escape_string($_POST['cedula_especialidad'] ?? '');
    $tipo_personas = $conn->real_escape_string($_POST['tipo_personas'] ?? '');
    $horario = $conn->real_escape_string($_POST['horario'] ?? '');
    $costo_primera = $conn->real_escape_string($_POST['costo_primera'] ?? '');
    $costo_subsecuente = $conn->real_escape_string($_POST['costo_subsecuente'] ?? '');
    $otro_costo = $conn->real_escape_string($_POST['otro_costo'] ?? '');
    $pago_efectivo = isset($_POST['pago_efectivo']) ? 1 : 0;
    $pago_transferencia = isset($_POST['pago_transferencia']) ? 1 : 0;
    $pago_tarjeta = isset($_POST['pago_tarjeta']) ? 1 : 0;
    $aseguradoras = $conn->real_escape_string($_POST['aseguradoras'] ?? '');
    $otras_ubicaciones = $conn->real_escape_string($_POST['otras_ubicaciones'] ?? '');
    $servicios_principales = $conn->real_escape_string($_POST['servicios_principales'] ?? '');
    $plan_contratado = $conn->real_escape_string($_POST['plan_contratado'] ?? '');
    $formacion_profesional = $conn->real_escape_string($_POST['formacion_profesional'] ?? '');
    $facebook = $conn->real_escape_string($_POST['facebook'] ?? '');
    $sitio_web = $conn->real_escape_string($_POST['sitio_web'] ?? '');
    $gmb = $conn->real_escape_string($_POST['gmb'] ?? '');
    $gmail = $conn->real_escape_string($_POST['gmail'] ?? '');
    $url_agsmedico = $conn->real_escape_string($_POST['url_agsmedico'] ?? '');

    // Directorio para subir archivos
    $uploadDir = 'uploads/';
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0755, true);
    }

    // Manejo de archivos subidos (archivos[])
    $archivos = '';
    if (!empty($_FILES['archivos']['name'][0])) {
        $filePaths = [];
        foreach ($_FILES['archivos']['tmp_name'] as $key => $tmp_name) {
            $fileName = basename($_FILES['archivos']['name'][$key]);
            $targetPath = $uploadDir . uniqid() . '_' . $fileName;
            if (move_uploaded_file($tmp_name, $targetPath)) {
                $filePaths[] = $targetPath;
            }
        }
        $archivos = implode(',', $filePaths);
    }

    // Manejo de firmas (asesor y contratante)
    $firma_asesor = null;
    if (!empty($_FILES['firma_asesor']['name'])) {
        $firmaAsesorFileName = basename($_FILES['firma_asesor']['name']);
        $firma_asesor = $uploadDir . uniqid() . '_asesor_' . $firmaAsesorFileName;
        move_uploaded_file($_FILES['firma_asesor']['tmp_name'], $firma_asesor);
    } elseif (!empty($_POST['firma_asesor_data'])) {
        $base64Data = $_POST['firma_asesor_data'];
        if (preg_match('/^data:image\/png;base64,/', $base64Data)) {
            $imageData = base64_decode(preg_replace('/^data:image\/png;base64,/', '', $base64Data));
            $firma_asesor = $uploadDir . uniqid() . '_asesor.png';
            file_put_contents($firma_asesor, $imageData);
        }
    }

    $firma_contratante = null;
    if (!empty($_FILES['firma_contratante']['name'])) {
        $firmaContratanteFileName = basename($_FILES['firma_contratante']['name']);
        $firma_contratante = $uploadDir . uniqid() . '_contratante_' . $firmaContratanteFileName;
        move_uploaded_file($_FILES['firma_contratante']['tmp_name'], $firma_contratante);
    } elseif (!empty($_POST['firma_contratante_data'])) {
        $base64Data = $_POST['firma_contratante_data'];
        if (preg_match('/^data:image\/png;base64,/', $base64Data)) {
            $imageData = base64_decode(preg_replace('/^data:image\/png;base64,/', '', $base64Data));
            $firma_contratante = $uploadDir . uniqid() . '_contratante.png';
            file_put_contents($firma_contratante, $imageData);
        }
    }

    // Consulta SQL con sentencia preparada
    $stmt = $conn->prepare("INSERT INTO formulario_medico (nombre, rfc, especialidad, fraccionamiento, email, cp, telefonos_fijos, telefono_emergencias, telefono_mensajes, num_ext, num_int, estado, municipio, fecha_inicio, cedula_profesional, cedula_especialidad, tipo_personas, horario, costo_primera, costo_subsecuente, otro_costo, pago_efectivo, pago_transferencia, pago_tarjeta, aseguradoras, otras_ubicaciones, servicios_principales, plan_contratado, formacion_profesional, facebook, sitio_web, gmb, gmail, url_agsmedico, archivos, firma_asesor, firma_contratante) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssssssssssssssiiiiissssssssss", $nombre, $rfc, $especialidad, $fraccionamiento, $email, $cp, $telefonos_fijos, $telefono_emergencias, $telefono_mensajes, $num_ext, $num_int, $estado, $municipio, $fecha_inicio, $ced_Mvc: 0px 2px 0px 2px rgba(0, 0, 0, 0.1);">
        if ($stmt->execute()) {
            echo "Datos guardados correctamente.";
        } else {
            echo "Error al guardar los datos: " . $conn->error;
        }

        $stmt->close();
        $conn->close();
    } else {
        echo "Método no permitido.";
    }
?>