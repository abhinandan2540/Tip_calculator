
let choose = document.getElementById("role");
let me = document.getElementById("me_sec");
let group = document.getElementById("group_sec");
console.log(group);
console.log(me);




choose.addEventListener("change", () => {
    console.log(choose.value);
    if (choose.value === "Myself") {
        group.style.display = 'none';
        me.style.display = 'block';

        me.innerHTML = `
        <div class="one">
        <div>
            <label id="inp_bill"> Bill :</ >
            <input id="val1" type="number" placeholder="Rupees">
        </div>
        <br>
        <div>
            <label id="inp_bill" >Tip :</label>
            <input id="val2" type="number" placeholder="%">
        </div>
        <br>
        <div class="final">
            <button id="calc">submit</button>
            <h3 id="inp_bill1">total bill :</h3>
            <h3 id="bill"></h3>
            
        </div>
        </div>
        
        `;
        let calc = document.getElementById("calc");
        let val1 = document.getElementById("val1");
        let val2 = document.getElementById("val2");
        let total = document.getElementById("bill");
        calc.addEventListener("click", () => {
            let b1 = parseFloat(val1.value) || 0;
            let b2 = parseFloat(val2.value) || 0;
            const ans = (b1 + (b1 * b2) / 100);
            total.textContent = `${ans} Rupees`;
            // window.location.reload();

        })

    } else {
        me.style.display = 'none';
        group.style.display = 'block';
        group.innerHTML = `
        <div class="all">
         <div>
            <label id="inp_bill" >Bill :</label>
            <input id="val3" type="number" placeholder="Rupees">
         </div>
        <br>
         <div>
            <label id="inp_bill" >Tip :</label>
            <input id="val4" type="number" placeholder="%">
         </div>
        <br>
         <div>
            <label  id="inp_bill" >Total group members:</label>
            <input id="mem" type="number">
         </div>
        <br>
         <div>
            <button id="calc1">submit</button>
            <h3 id="inp_bill1"  >total bill :</h3>
            <h3 id="bill1"></h3>
            
         </div>
        </div>
        `;
        let val3 = document.getElementById("val3");
        let val4 = document.getElementById("val4");
        let member = document.getElementById("mem");
        let calc1 = document.getElementById("calc1");
        let bill1 = document.getElementById("bill1");
        calc1.addEventListener("click", () => {
            const v1 = parseFloat(val3.value) || 0;
            const v2 = parseFloat(val4.value) || 0;
            let m1 = parseInt(member.value) || 1;

            const ans1 = ((v1 + (v1 * v2) / 100) / m1);
            const a = ans1.toFixed(2);
            bill1.textContent = `${a} Rupees each`;

        })




    }
}
)
