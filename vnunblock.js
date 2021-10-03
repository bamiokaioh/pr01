! function() {
    function f() {
        var a = document.createElement("div");
        a.id = "levelmaxblock";
        a.innerHTML = '<div class="inner"><div class="header"><h2 style="color:#fff;">Đã phát hiện tiện ích chặn Ad Blocker</h2></div><p>Hãy tắt tiện ích này để tiếp tục truy cập BLog!<br/>Xem hướng dẫn tắt Ad Blocker đối với Blog này ở đây:</p><div class="tombol"><button class="1 active">Adblocker</button><button class="2">Adblock Ultimate</button><button class="3">Adgruard Adblocker</button></div><div class="caranya"><div class="1 active"><ol><li>Click chuột vào Biểu tượng AdBlocker trên trình duyệt của bạn.<br/><img src="https://1.bp.blogspot.com/-AtVDADBfmKY/YVixqxxXuxI/AAAAAAAAA5E/YL4s0MXnlTkILNlqQGe0ydP_vN777R-LACLcBGAsYHQ/s0/icon-adblock.png" alt="Adblock" width="100px"/></li><li>Tại tùy chọn "Pause on this site".<br/>Chọn nút "Always".<br/><img src="https://1.bp.blogspot.com/-yX-yKRg_7dA/YVi3o3bAaoI/AAAAAAAAA5s/S_grjF8VaaMOoe3o_HjivdRYodqUx-oPACLcBGAsYHQ/s0/Adblock.setup1.png" alt="Adblock" width="300px"/></li><li>Biểu tượng AdBlocker sẽ chuyển sang màu xanh.<br/><img src="https://1.bp.blogspot.com/-HpbunFl9PXI/YVixpw_PcLI/AAAAAAAAA48/qzLXdFFBvIUsKr-EUzCYlVQSItv4zwtbACLcBGAsYHQ/s0/adblock.ok.png" alt="Adblock" width="100px"/></li><li>Nhấn F5 để tải lại Blog nếu trình duyệt không tự động tải lại trang.<br/>Cảm ơn bạn đã làm theo hướng dẫn!</li></ol></div><div class="2"><ol><li>Click chuột vào Biểu tượng AdBlock Ultimate trên trình duyệt của bạn.<br/><img src="https://1.bp.blogspot.com/-AhG0eNw9DuE/YVi6bx0_qiI/AAAAAAAAA50/X25cztVvYd8mPteugxjxFAi1fWJEao1-QCLcBGAsYHQ/s0/Adblock-plus.icon.png" alt="Adblock" width="100px"></li><li>Tại tùy chọn "Enabled on this site".<br/>Chọn "Tắt".<br/><img src="https://1.bp.blogspot.com/-hNGgFrfwbKg/YVi8PEQ3s7I/AAAAAAAAA58/HXoU8gJ9RuggD82mMb9ifbuSCfgaUxw6ACLcBGAsYHQ/s0/Adblock-plus.setup1.JPG" alt="Adblock" width="300px"></li><li>Icon AdBlock Ultimate sẽ chuyển sang màu xám.<br/><img src="https://1.bp.blogspot.com/-8f3DW_sGDe0/YVi9QReUF2I/AAAAAAAAA6E/xgQY6Zpnb30ziFr-prWwLRAJOGGlJDD4QCLcBGAsYHQ/s0/Adblock-plus.setup2.JPG" alt="Adblock" width="300px"></li><li>Nhấn F5 để tải lại Blog nếu trình duyệt không tự động tải lại trang.<br/>Cảm ơn bạn đã làm theo hướng dẫn!</li></ol></div><div class="3"><ol><li>Click chuột vào Biểu tượng Adguard Adblocker  trên trình duyệt của bạn.<br/><img src="https://1.bp.blogspot.com/-ATWQBYHY998/YVkZpKeJVvI/AAAAAAAAA6U/2tWY9uRPINoaiPyU5zLSKYt_MmiiuLdHwCLcBGAsYHQ/s0/Adguard.icon.png" alt="Adblock" width="100px"></li><li>Tại biểu tượng "Protection switch".<br/>Chọn "Tắt".<br/><img src="https://1.bp.blogspot.com/-5fMfU8taj9Q/YVkZpBWgtrI/AAAAAAAAA6Q/Ikrsuti6r0c5muSWgsUihyIEMmmJtvn2QCLcBGAsYHQ/s0/adguard.setup1.JPG" alt="Adblock" width="300px"></li><li>Biểu tượng Adguard Adblocker sẽ chuyển sang màu xám.<br/><img src="https://1.bp.blogspot.com/-YvcoOzmvu8g/YVkZpFxFvzI/AAAAAAAAA6M/akOek1DGjGspWDDyCJecE0EuIbM6wph8wCLcBGAsYHQ/s0/adguard.setup2.JPG" alt="Adblock" width="300px"></li><li>Nhấn F5 để tải lại Blog nếu trình duyệt không tự động tải lại trang.<br/>Cảm ơn bạn đã làm theo hướng dẫn!</li></ol></div></div></div>';

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
