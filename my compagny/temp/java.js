<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Statements</h2>

<p>JavaScript code blocks are written between { and }</p>

<button type="button" onclick="myFunction()">1</button>
<button onclick="myFunction()">2</button>
<button onclick="myFunction()">3</button>
<button onclick="myFunction()">4</button>
<button onclick="myFunction()">5</button>
<button onclick="myFunction()">6</button>
<button onclick="myFunction()">7</button>
<button onclick="myFunction()">8</button>
<button onclick="myFunction()">9</button>
<button onclick="myFunction()">10</button>
<button onclick="myFunction()">11</button>
<button onclick="myFunction()">12</button>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
</script>

</body>
</html>
