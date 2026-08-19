document.addEventListener(
    "DOMContentLoaded",
    function () {

        const tabs =
            document.querySelectorAll(
                ".learning-tab"
            );

        const panels =
            document.querySelectorAll(
                ".topic-panel"
            );


        tabs.forEach(
            function (tab) {

                tab.addEventListener(
                    "click",
                    function () {

                        const target =
                            tab.getAttribute(
                                "data-tab"
                            );


                        tabs.forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                        panels.forEach(
                            function (panel) {

                                panel.classList.remove(
                                    "active"
                                );

                            }
                        );


                        tab.classList.add(
                            "active"
                        );


                        const selectedPanel =
                            document.getElementById(
                                target
                            );


                        if (selectedPanel) {

                            selectedPanel
                                .classList
                                .add(
                                    "active"
                                );

                        }

                    }
                );

            }
        );

    }
);