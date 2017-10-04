<!DOCTYPE html>
<html>
<head>
<script type="text/javascript">
function upperCase(){
var x=document.getElementById("fname");
x.value=x.value.toUpperCase();
}
</script>
</head>
<body>
Enter your name: 
<input type="text" id="fname" onblur="upperCase()" />
<p> Text changes to uppercase when you leave the input field.	</p>
</body>
</html>

