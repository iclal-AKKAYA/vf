function create(uri, model,action) {
 
    swal.fire({
        title: '@Localizer["Emin misiniz?"]',
        text: '@Localizer["Kaydetme işlemi yapmaktasınız kaydı geri alamazsınız!"]',
        type: '@Localizer["hata"]',
        showCancelButton: true,
        confirmButtonText: '@Localizer["Evet, Kaydet!"]',
        cancelButtonText: '@Localizer["Hayır, Kaydetme!"]',
        reverseButtons: true
    }).then(function (result) {
        if (result.value) {
            $.ajax({
                url: uri,
                type: 'POST',
                data: JSON.stringify(model),
                contentType: 'application/json',
                success: function (response) {
                    Swal.fire(
                        '@Localizer["Kaydedildi!"]',
                        '@Localizer["Kaydetme Başarılı."]',
                        '@Localizer["başarılı"]'
                    ).then(() => {
                        window.location.href = action;
                    });
                },
                error: function () {
                    Swal.fire(
                        '@Localizer["Hata!"]',
                        '@Localizer["Kaydederken hata oluştu."]',
                        '@Localizer["hata"]'
                    );
                }
            });
        } else if (
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swal.fire(
                '@Localizer["İptal"]',
                '@Localizer["Kayıtlarınız güvende:)"]',
                '@Localizer["hata"]'
            )
        }
    })
}
