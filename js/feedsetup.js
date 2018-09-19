    /* Want to customize? Read Documentation */
    if ($('#instafeed').length) {
        var feed = new Instafeed({
            get: 'user',
            userId: '3401121086',
            resolution: 'low_resolution',
            clientId: 'a42e80c86661419b94a5ac01dc022221',
            accessToken: '3401121086.ca9c5d8.49a154f2d6034846ae4e37962de804e8',
            template: '<div class="instafeed_img"><a href="{{link}}" target="_blank"><div class="instagram_img_holder" style="background-image: url({{image}});"></div><div class="instafeed_img_overlay"><span>Instagram</span></div></a></div>',
            after: function() {
                runInstaCarousel();
            },
            error: function() {
                $('#instafeed').html('<p class="text-center">To setup Instagram feed, Please read the documentation.</p>')
            }
        });
        feed.run();

        function runInstaCarousel() {
            if ($('#instafeed').attr("dir") == "rtl") {
                $("#instafeed").owlCarousel({
                    rtl: true,
                    center: false,
                    loop: true,
                    autoplay: true,
                    responsive: {
                        0: {
                            items: 3
                        },
                        600: {
                            items: 5
                        },
                        1000: {
                            items: 7
                        }
                    }
                });
            } else(
                $("#instafeed").owlCarousel({
                    center: false,
                    loop: true,
                    autoplay: true,
                    responsive: {
                        0: {
                            items: 3
                        },
                        600: {
                            items: 5
                        },
                        1000: {
                            items: 7
                        }
                    }
                })
            )
        }
    }
