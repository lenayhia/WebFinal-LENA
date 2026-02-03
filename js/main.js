 $(document).ready(function() {
    
    // 1. بيانات نقاط التوزيع 
    const aidData = [
        { area: "غزة", type: "طرود غذائية", time: "09:00 صباحاً", status: "متاح" },
        { area: "خانيونس", type: "مياه", time: "11:00 صباحاً", status: "مكتمل" },
        { area: "رفح", type: "طرود غذائية", time: "01:00 ظهراً", status: "متاح" },
        { area: "النصيرات", type: "مياه", time: "10:00 ظهراً", status: "متاح" },
        { area: "الدير", type: "أدوية", time: "12:00 ظهراً", status: "متاح" },

    ];

    // 2. عرض البيانات باستخدام Loop (Data-driven Rendering) 
    const tableBody = $('#aidData');
    tableBody.empty();
    aidData.forEach(item => {

        let statusClass = item.status === "متاح" ? "text-success" : "text-danger";
        //تحديد لون الحالة اخضر متاح احمر مكتمل
       
        tableBody.append(`
            <tr>
                <td>${item.area}</td>
                <td>${item.type}</td>
                <td>${item.time}</td>
                <td class="${statusClass} fw-bold">${item.status}</td>
            </tr>
        `);
    
        });
    


    // 3. فلترة الجدول باستخدام jQuery (Filter) 
    $("#areaFilter").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#aidData tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    // 4. التحقق من النموذج وتغيير الـ DOM (Validation & DOM Manipulation)
    $('#requestForm').submit(function(e) {
        e.preventDefault();
        const name = $('#userName').val();
        
        if(name.length < 3) {
            alert("يرجى إدخال اسم صحيح");
        } else {
            // تأثير حركي (jQuery Fade) عند الإرسال 
            $('#formMsg').hide().removeClass('d-none').text("شكراً " + name + "، تم استلام طلبك بنجاح!").fadeIn();
            $(this).trigger("reset");
        }
    });
});// إضافة ميزة إلزامية: إخفاء/إظهار تفاصيل إضافية باستخدام jQuery Slide
$(document).ready(function() {
    // عند النقر على أي أيقونة خدمة، يظهر تنبيه بسيط
    $('.card').click(function() {
        $(this).find('p').slideToggle(); // تأثير jQuery Slide المطلوب 
    });

    // تفعيل خاصية الـ Tooltip لـ Bootstrap (اختياري للتميز)
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });
});

