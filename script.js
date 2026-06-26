function decodeBinary() {
    const input = document.getElementById('binaryInput').value.trim();
    const log = document.getElementById('outputLog');
    
    if (!input) return;

    // Clean up input and split into chunks of bytes
    const cleanInput = input.replace(/[^01\s]/g, '');
    const binaryArray = cleanInput.split(/\s+/);
    let textResult = '';

    try {
        binaryArray.forEach(bin => {
            if (bin.length > 0) {
                const decimal = parseInt(bin, 2);
                if (!isNaN(decimal)) {
                    textResult += String.fromCharCode(decimal);
                }
            }
        });
        
        if (textResult.trim() === "") throw new Error();

        // Print to the terminal console
        log.innerHTML += `<p class="system-text">> COMPILING INTERCEPT DATA...</p>`;
        log.innerHTML += `<div class="decoded-output">[TRANSLATION SUCCESS]: "${textResult}"</div>`;
    } catch (e) {
        log.innerHTML += `<p class="system-text" style="color: #ff0033">> [ERROR]: CORRUPTED TRANSMISSION PACKET. UNABLE TO DECOMPILE.</p>`;
    }

    // Clear field and scroll window down
    document.getElementById('binaryInput').value = '';
    log.scrollTop = log.scrollHeight;
}
