let boxs=document.querySelectorAll(".box");
let head=document.querySelector(".box .head")
Array.from(boxs).forEach((element) => {
    element.addEventListener("click", () => {
        const isActive = element.classList.contains("active");
        document.querySelectorAll('.box p').forEach(p => {
            p.style.display = 'none';
        });
        document.querySelectorAll('.box').forEach(box => {
            box.classList.remove('active');
            const headElement = box.querySelector(".head");
            if (headElement) {
                headElement.style.backgroundColor = "";
            }
            const plusIcon = box.querySelector(".fa-circle-plus");
            const minusIcon = box.querySelector(".fa-circle-minus");
            if (plusIcon && minusIcon) {
                plusIcon.style.display = "block";
                minusIcon.style.display = "none";
            }
        });
        if (isActive) return;
        element.querySelectorAll("p").forEach(p => {
            p.style.display = 'block';
        });

        element.classList.add("active");
        const headElement = element.querySelector(".head");
        if (headElement) {
            headElement.style.backgroundColor = "rgb(0, 119, 255)";
        }

        const plusIcon = element.querySelector(".fa-circle-plus");
        const minusIcon = element.querySelector(".fa-circle-minus");

        if (plusIcon && minusIcon) {
            plusIcon.style.display = "none";
            minusIcon.style.display = "block";
        }
    });
});




