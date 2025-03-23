document.addEventListener("DOMContentLoaded", function () {
    // Function to replace "NdaY'" with an image
    function replaceTextWithImage(node) {
        const targetText = "NdaY'";

        if (node.nodeType === Node.TEXT_NODE) {
            if (node.textContent.includes(targetText)) {
                const parent = node.parentNode;
                const computedStyle = window.getComputedStyle(parent);

                const fontSize = parseFloat(computedStyle.fontSize);
                const fontWeight = computedStyle.fontWeight;

                let imgWidth = fontSize * 1.2;
                let imgHeight = fontSize * 0.8;

                if (fontWeight >= 600) {
                    imgWidth = fontSize * 1.4;
                    imgHeight = fontSize * 0.9;
                }

                const replacementHtml = `
                    <img 
                        src="assets/images/NdaY'Word.png" 
                        alt="NdaY'" 
                        style="width: ${imgWidth}px; height: ${imgHeight}px; vertical-align: baseline;" 
                        class="ndai-word"
                    >
                `;

                parent.innerHTML = parent.innerHTML.replace(
                    new RegExp(targetText, "gi"),
                    replacementHtml
                );
            }
        } else {
            node.childNodes.forEach((child) => replaceTextWithImage(child));
        }
    }

    replaceTextWithImage(document.body);

    document.querySelectorAll('.ndai-word').forEach(img => {
        img.style.border = '1px solid rgba(0, 0, 0, 0.1)';
        img.style.boxShadow = '0 0 2px rgba(0, 0, 0, 0.2)';
    });

    const globe = document.querySelector('.rotating-globe');
    globe.addEventListener('mouseenter', function () {
        globe.style.animationPlayState = 'paused';
    });

    globe.addEventListener('mouseleave', function () {
        globe.style.animationPlayState = 'running';
    });

    const smartphone = document.querySelector('.dropping-smartphone');
    smartphone.style.animation = 'dropIn 15s ease-in-out infinite';
});