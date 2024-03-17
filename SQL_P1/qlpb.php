<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QLPB_VS1</title>
</head>
<body>
    <?php 
        
        $servername = "localhost";
        $username = "root";
        $password ="";
        $database ="qlnv_s1";
        $conn = mysqli_connect($servername,$username,$password,$database);
        
        $sql="Select * from nhanvien";
        $query=mysqli_query($conn,$sql);
        $result= $conn->query($sql);
        echo '<table border = "1" width = "100%">';
        echo '<caption> Du lieu bang Nhân Viên</caption>';
        echo '<TR><TH> Ma nhân viên</TH><TH>Tên nhân viên</TH><TH>ID Phòng ban</TH><TH>Địa chỉ</TH>';
        if ($result->num_rows > 0) 
        {
            while($row = $result->fetch_assoc()) {          
                echo '<TR><TD>'.$row["IDNV"] .'</TD><TD>'.$row["Hoten"].'</TD><TD>'.$row["IDPB"]. '</TD><TD>'. $row["Diachi"] .'</TD></TR>';
            }
        } 
        $conn->close();
    ?>
</body>
</html>
$link = mysqli_connect('localhost', 'root', '') or die('Could not connect: ', mysql_error());
$db_selected = mysqli_select_db($link, 'qlnv_s1');