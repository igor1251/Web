class CalcSum {
    Recursive(deep) {
        if (deep == 0) {
            return deep;
        }
        else 
        {
            return deep + this.Recursive(deep - 1);
        }
    }

    Cycle(deep) {
        let sum = 0;
        while (deep > 0) {
            sum += deep;
            deep--;
        }
        return sum;
    }
}

var calc = new CalcSum();

var deep = Number(prompt("Введите глубину"));

let div = document.createElement('div');

let recursiveTagP = document.createElement('p');
recursiveTagP.innerText = 'Результат вычисления рекурсивной функции';
recursiveTagP.innerHTML += `<pre>\nCalcSum.Recursive(${deep}) = ${calc.Recursive(deep)}\n<pre>`;
div.appendChild(recursiveTagP);

let cycleTagP = document.createElement('p');
cycleTagP.innerText = 'Результат вычисления в цикле';
cycleTagP.innerHTML += `<pre>\nCalcSum.Cycle(${deep}) = ${calc.Cycle(deep)}\n<pre>`;
div.appendChild(cycleTagP);

document.body.append(div);
