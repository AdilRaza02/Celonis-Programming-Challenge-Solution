

// Example on how we can implement the Formulas- Task 2.
// This example covers only four operations +,-,/,*


function evaluate(astJSON) {
    if (astJSON.type == "NUMBER") {
      return astJSON.value;
    }

    if (astJSON.type == "ADDITION") {
      this.expressionSigns.push(astJSON.type);
      return this.evaluate(astJSON.left) + this.evaluate(astJSON.right);
    }

    if (astJSON.type == "SUBTRACTION") {
      this.expressionSigns.push(astJSON.type);
      return this.evaluate(astJSON.left) - this.evaluate(astJSON.right);
    }

    if (astJSON.type == "MULTIPLICATION") {
      this.expressionSigns.push(astJSON.type);
      return this.evaluate(astJSON.left) * this.evaluate(astJSON.right);
    }

    if (astJSON.type == "DIVISION") {
      this.expressionSigns.push(astJSON.type);
      return this.evaluate(astJSON.left) / this.evaluate(astJSON.right);
    }

    if (astJSON.type == "PAREN") {
      if (astJSON.expression.type == "SUBTRACTION") {
        this.expression.push(
          "(" +
            astJSON.expression.left.value.toString() +
            "-" +
            astJSON.expression.right.value.toString() +
            ")"
        );

        return (
          this.evaluate(astJSON.expression.left) -
          this.evaluate(astJSON.expression.right)
        );
      }
      if (astJSON.expression.type == "ADDITION") {
        this.expression.push(
          "(" +
            astJSON.expression.left.value.toString() +
            "+" +
            astJSON.expression.right.value.toString() +
            ")"
        );

        return (
          this.evaluate(astJSON.expression.left) +
          this.evaluate(astJSON.expression.right)
        );
      }

      if (astJSON.expression.type == "MULTIPLICATION") {
        this.expression.push(
          "(" +
            astJSON.expression.left.value.toString() +
            "*" +
            astJSON.expression.right.value.toString() +
            ")"
        );

        return (
          this.evaluate(astJSON.expression.left) *
          this.evaluate(astJSON.expression.right)
        );
      }

      if (astJSON.expression.type == "DIVISION") {
        this.expression.push(
          "(" +
            astJSON.expression.left.value.toString() +
            "/" +
            astJSON.expression.right.value.toString() +
            ")"
        );

        return (
          this.evaluate(astJSON.expression.left) /
          this.evaluate(astJSON.expression.right)
        );
      }

      if (astJSON.expression.type == "NUMBER") {
        console.log(astJSON.expression.value);
        this.expression.push("(" + astJSON.expression.value.toString() + ")");
        return astJSON.expression.value;
      }
    }

    return "Something Wrong Happened....";
  }

  function expressionMerger() {
    for (let i = 0; i < this.expression.length; i++) {
      this.final.push(this.expression[i]);
      if (this.expressionSigns[i] == undefined) {
        break;
      }
      this.final.push(this.expressionSigns[i]);
    }
    console.log(this.final);
  }

