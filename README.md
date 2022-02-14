# FluentUML

A wrapper around PlantUML for writing architecture diagrams in Javascript

**Usage**
    <script type=text/javascript src=plantuml-encoder.min.js></script>
    <script type=text/javascript src=FluentUML.js></script>
    <script type=text/javascript>
    		var UML = new FluentUML();
		var master = UML.node('Master').type('Server').note('Serves requests');
		var slave = UML.node('Slave').type('Client').note('Responsible for update');
		var dbA = UML.database('Table A');
		var dbB = UML.database('Table B');
		master.right(dbA);
		slave.up(master).note('Pull changes');
		slave.right(dbB);
		document.body.innerHTML = UML.toHTML();
    </script>

<img src="https://www.plantuml.com/plantuml/img/bP9FJyCm3CNl-HG-zp1Ks0bLbROXJY0XjXlYaALU6vR69Kxt1yHtnzkghLocScbL-_tYvxnc7FSESsMSPdwmkWowXc_rP3qkAclM7faXLO_auzn-8QItwaSfniyMlS71GCjeD0_Nq_83JHmiroRQZOtxmO2XkY6FVlY80Xj7-_e_24STXwySRMrzELYUtNJ9ALvRt-W3L9CdKmMg4M9eiTVn576gpReCrFfYHeu2R2iR-ngkT45RyG0hxRZVAN2bMnVx3YxDBjefXG93t_15ShxjQw8WWMjVkgidIT0K5hYB4sTBVqW3Z3mmA4y5mYw5B9jZs638StXJIVAiMRf9ea0TwonpvD_boEgzOsw5cJahntJCtEaD7f5NP37ETkaGLd9bRLD8f4BAIozbQzZT2RBG1y7aJtryha-bBiPW54Ov2A1a8epQuqTw3o-jSs0gMLtCvQVcIJbMlm00">

**Another example**. See *index.html* and *examples/* for more.
<img src="https://www.plantuml.com/plantuml/img/bLJRRjim37tNLn3zWAvocxGPYW9fkW45MgnOkhti0cWoRMkLfKoIbsH3_trKRfQ6eV1U0f67XpewP7pfmrhZ5PDQU7-ZHEr42x_PdJBus2ZvPD1xuEojDM6kVY7mWZqpvl57XqRYO4BdKGe_lDv--uuo32uNCgYVAgm74wHj5zQW6Nv5YGjjr-t_K7mGOVYJWsgLgGUNNxxQJOxv9sKM8f9QQwnid6qHWkimGOmDU2taK-riPygPrTR1ib4XhV6DAEsID40bj4-H4YlHwP0gwC7TQA-jAz6bWlkIWzil5JaQk32rVh4J3TgwHro5gLQrYTC0IJ_e6DDO1GWMdAgR0AMA_PGrx6_sFDe6OecUV6AR5AmuV68VFBNviiyKb9bseQ7kIWeMi8Iyu9GAthHnAH3xx5cabJH9vOCZcesCm_lXg6_vsKHvHo0yh2vetZiVONLEBTvZJGqsrnto8yhVsHfkJPeTxxBlka3fvnwO4F1HuHBOWtMXibhPNCfSDbXscWQ-5S5FKnNyXFWpXxJ2mEOqX-XbSY-FbjtRKbNhV-FHm7jXHDtpVQwGdsrUIfyI7u1D5mkhJ8WppVgCaZuFpbPAOuQFUnstfh8PTfvmPqAZAKLcAR-8uo9jjI6H2vHAQF8zAvcaxwH_TETJk3ZfhuZxaOE9HxlbwR7epmrg3BZ7Q7a0ZlNnLw3jUaslaRehqSCLesKx84ME53t2SuGJS7n5-L5odYJdymrxUnudPtwM1f4zEaJZB2esodO1jIF3zz595d4M5sOVNMJHPFFmRL0GZIpTHpoB2lO7">

Licensed under [EUPL](https://joinup.ec.europa.eu/collection/eupl/eupl-text-11-12)
