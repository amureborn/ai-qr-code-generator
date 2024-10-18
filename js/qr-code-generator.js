/*
(C) prepphint.com all right reserved.
*/
  window.onload = () => {
    const uniqueUrlInput = document.getElementById('unique_url');
    const uniqueColorDarkInput = document.getElementById('unique_colorDark');
    const uniqueColorLightInput = document.getElementById('unique_colorLight');
    const uniqueTransparentBgCheckbox = document.getElementById('unique_transparentBg');
    const uniqueSizeRange = document.getElementById('unique_sizeRange');
    const uniqueSizeValue = document.getElementById('unique_sizeValue');
    const uniqueQrCodeContainer = document.getElementById('unique_qr_code');
    const uniqueDownloadPNG = document.getElementById('unique_downloadPNG');
    const uniqueDownloadJPG = document.getElementById('unique_downloadJPG');
    let uniqueQrCode;

    const uniqueUpdateQRCode = () => {
      const textValue = uniqueUrlInput.value.trim();
      const colorDark = uniqueColorDarkInput.value;
      let colorLight = uniqueColorLightInput.value;
      const transparentBg = uniqueTransparentBgCheckbox.checked;
      const qrSize = parseInt(uniqueSizeRange.value);

      uniqueQrCodeContainer.innerHTML = "";
      uniqueSizeValue.textContent = `${qrSize}px`;

      if (transparentBg) {
        colorLight = "rgba(255, 255, 255, 0)";
      }

      if (textValue) {
        if (uniqueQrCode) {
          uniqueQrCode.clear();
        }

        uniqueQrCode = new QRCode(uniqueQrCodeContainer, {
          text: textValue,
          width: qrSize,
          height: qrSize,
          colorDark: colorDark,
          colorLight: colorLight,
          quietZone: 10,
          correctLevel: QRCode.CorrectLevel.H
        });

        document.getElementById('unique_saveButtons').style.display = "flex";
      } else {
        document.getElementById('unique_saveButtons').style.display = "none";
      }
    };

    const downloadCanvasAsImage = (format) => {
      const canvas = uniqueQrCodeContainer.querySelector("canvas");
      if (!canvas) return;

      const link = document.createElement("a");
      link.download = `prepphint.com_qrcode.${format}`;
      link.href = canvas.toDataURL(`image/${format}`);
      link.click();
    };

    uniqueDownloadPNG.addEventListener('click', () => downloadCanvasAsImage('png'));
    uniqueDownloadJPG.addEventListener('click', () => downloadCanvasAsImage('jpeg'));

    uniqueUrlInput.addEventListener('input', uniqueUpdateQRCode);
    uniqueColorDarkInput.addEventListener('input', uniqueUpdateQRCode);
    uniqueColorLightInput.addEventListener('input', uniqueUpdateQRCode);
    uniqueTransparentBgCheckbox.addEventListener('input', uniqueUpdateQRCode);
    uniqueSizeRange.addEventListener('input', uniqueUpdateQRCode);

    // Generate the initial QR code on page load
    uniqueUpdateQRCode();
  };
