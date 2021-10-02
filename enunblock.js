! function() {
    function f() {
        var a = document.createElement("div");
        a.id = "levelmaxblock";
        a.innerHTML = '<div class="inner"><div class="header"><h2 style="color:#fff;">Ad blocker detected</h2></div><p>Please disable your Ad Blocker to continue!</p><div class="tombol"><button class="1 active">Adblock</button><button class="2">Adblock Plus</button></div><div class="caranya"><div class="1 active"><ol><li>Click on the AdBlock icon in your browser.<br/><img src="https://1.bp.blogspot.com/-AtVDADBfmKY/YVixqxxXuxI/AAAAAAAAA5E/YL4s0MXnlTkILNlqQGe0ydP_vN777R-LACLcBGAsYHQ/s0/icon-adblock.png" alt="Adblock" width="250px"/></li><li>At the "Pause on this site" option.<br/>Choose, "Always" button.<br/><img src="https://1.bp.blogspot.com/-yX-yKRg_7dA/YVi3o3bAaoI/AAAAAAAAA5s/S_grjF8VaaMOoe3o_HjivdRYodqUx-oPACLcBGAsYHQ/s0/Adblock.setup1.png" alt="Adblock" width="300px"/></li><li>The browser icon should have turned green.<br/><img src="https://1.bp.blogspot.com/-C_2jfELNPIY/YQrVf_4NhoI/AAAAAAAABD4/ZKsh6fA1Oeoa2EQkWS2YY0RcY9Kkg2LoACLcBGAsYHQ/s0/adblock-3.png" alt="Adblock" width="250px"/></li><li>Refresh the page if it didn\'t refresh automatically. Thanks!</li></ol></div><div class="2"><ol><li>Click on the AdBlock Plus icon in your browser.<br/><img src="https://1.bp.blogspot.com/-1dKGY_vCsTM/YVix1Qd5IYI/AAAAAAAAA5M/NugD5CHq01UogjmK2cwAKanVoQ35EAF1ACLcBGAsYHQ/s0/adblock-plus.icon.png" alt="Adblock" width="250px"></li><li>Click the "This Website" button.<br/>Nhấp vào nút "Trang web này".<br/><img src="https://1.bp.blogspot.com/-pbintRNc8zE/YQrVgvfRNzI/AAAAAAAABEE/4M5LrWVNVQ0S7_bkvwS1FzKPU3nSTgJFgCLcBGAsYHQ/s0/adblock-5.png" alt="Adblock" width="300px"></li><li>The browser icon should have turned grey.<br/>Biểu tượng trình duyệt phải chuyển sang màu xám.<br/><img src="https://1.bp.blogspot.com/-a0uQ3dyZrOQ/YQrVgp5dnfI/AAAAAAAABEA/HSuGCzHRajY9Vg3RWpeK991MXbJDkXAowCLcBGAsYHQ/s0/adblock-6.png" alt="Adblock" width="250px"></li></ol></div></div></div>';

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
