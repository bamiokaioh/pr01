! function() {
    function f() {
        var a = document.createElement("div");
        a.id = "levelmaxblock";
        a.innerHTML = '<div class="inner"><div class="header"><h2 style="color:#fff;">Ad blocker detected</h2></div><p>Please disable your Ad Blocker to continue!</p><div class="tombol"><button class="1 active">Adblocker</button><button class="2">Adblock Ultimate</button><button class="3">Adgruard Adblocker</button></div><div class="caranya"><div class="1 active"><ol><li>Click on the AdBlocker icon in your browser.<br/><img src="https://1.bp.blogspot.com/-AtVDADBfmKY/YVixqxxXuxI/AAAAAAAAA5E/YL4s0MXnlTkILNlqQGe0ydP_vN777R-LACLcBGAsYHQ/s0/icon-adblock.png" alt="Adblock" width="100px"/></li><li>At the "Pause on this site" option.<br/>Choose, "Always" button.<br/><img src="https://1.bp.blogspot.com/-yX-yKRg_7dA/YVi3o3bAaoI/AAAAAAAAA5s/S_grjF8VaaMOoe3o_HjivdRYodqUx-oPACLcBGAsYHQ/s0/Adblock.setup1.png" alt="Adblock" width="300px"/></li><li>The AdBlocker icon should have turned green.<br/><img src="https://1.bp.blogspot.com/-HpbunFl9PXI/YVixpw_PcLI/AAAAAAAAA48/qzLXdFFBvIUsKr-EUzCYlVQSItv4zwtbACLcBGAsYHQ/s0/adblock.ok.png" alt="Adblock" width="100px"/></li><li>Refresh the page if it didn\'t refresh automatically. Thanks!</li></ol></div><div class="2"><ol><li>Click on the AdBlock Ultimate icon in your browser.<br/><img src="https://1.bp.blogspot.com/-AhG0eNw9DuE/YVi6bx0_qiI/AAAAAAAAA50/X25cztVvYd8mPteugxjxFAi1fWJEao1-QCLcBGAsYHQ/s0/Adblock-plus.icon.png" alt="Adblock" width="100px"></li><li>At the "Enabled on this site" option.<br/>Choose, "turn-off".<br/><img src="https://1.bp.blogspot.com/-hNGgFrfwbKg/YVi8PEQ3s7I/AAAAAAAAA58/HXoU8gJ9RuggD82mMb9ifbuSCfgaUxw6ACLcBGAsYHQ/s0/Adblock-plus.setup1.JPG" alt="Adblock" width="300px"></li><li>The AdBlock Ultimate icon should have turned grey.<br/><img src="https://1.bp.blogspot.com/-8f3DW_sGDe0/YVi9QReUF2I/AAAAAAAAA6E/xgQY6Zpnb30ziFr-prWwLRAJOGGlJDD4QCLcBGAsYHQ/s0/Adblock-plus.setup2.JPG" alt="Adblock" width="300px"></li><li>Refresh the page if it didn\'t refresh automatically. Thanks!</li></ol></div><div class="3"><ol><li>Click on the Adguard Adblocker icon in your browser.<br/><img src="https://1.bp.blogspot.com/-ATWQBYHY998/YVkZpKeJVvI/AAAAAAAAA6U/2tWY9uRPINoaiPyU5zLSKYt_MmiiuLdHwCLcBGAsYHQ/s0/Adguard.icon.png" alt="Adblock" width="100px"></li><li>At the "Protection switch" button.<br/>Choose, "turn-off".<br/><img src="https://1.bp.blogspot.com/-5fMfU8taj9Q/YVkZpBWgtrI/AAAAAAAAA6Q/Ikrsuti6r0c5muSWgsUihyIEMmmJtvn2QCLcBGAsYHQ/s0/adguard.setup1.JPG" alt="Adblock" width="300px"></li><li>The Adguard Adblocker icon should have turned grey.<br/><img src="https://1.bp.blogspot.com/-YvcoOzmvu8g/YVkZpFxFvzI/AAAAAAAAA6M/akOek1DGjGspWDDyCJecE0EuIbM6wph8wCLcBGAsYHQ/s0/adguard.setup2.JPG" alt="Adblock" width="300px"></li><li>Refresh the page if it didn\'t refresh automatically. Thanks!</li></ol></div></div></div>';

        document.body.append(a);
        document.body.style.overflow = "hidden";
        var b = a.querySelectorAll("button");
        a.querySelector(".close");
        var d = a.querySelectorAll(".caranya > div");
        for (a = 0; a < b.length; a++) b[a].addEventListener("click", function(a) {
            a.preventDefault();
            a = this.getAttribute("class").split(" ")[0];
            for (var c = 0; c < d.length; c++) d[c].classList.remove("active"), b[c].classList.remove("active");
            b[a - 1].classList.add("active");
            d[a - 1].classList.add("active")
        })
    }
    var b = document.createElement("script");
    b.type = "text/javascript";

    b.async = !0;
    b.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    b.onerror = function() {
        f();
        window.adblock = !0
    };
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(b, e)
}();
