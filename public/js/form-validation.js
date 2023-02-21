
                    // Check if the DOMContentLoaded has already been completed
                    // if (document.readyState !== 'loading') {
                    (function () {
                        (document.readyState !== 'loading') ?
                            eventHandler() : document.addEventListener('DOMContentLoaded',
                                function () {
                                    eventHandler(); // EventHandler
                                    //        });
                                    // $(document).ready(function () {

                                    // Here is how to show an error message next to a form field

                                    //var errorField = $('.form-input-name-row');
                                    var errorField = document.getElementsByClassName('.form-input-name-row');

                                    // Adding the form-invalid-data class will show
                                    // the error message and the red x for that field

                                    // errorField.addClass('form-invalid-data');
                                    errorField.classList.add('form-invalid-data');
                                    //errorField.find('.form-invalid-data-info').text('Please enter your name');
                                    errorField.classList.contains('.form-invalid-data-info').textContent = 'Please enter your name';


                                    // Here is how to mark a field with a green check mark

                                    //var successField = $('.form-input-email-row'); 
                                    var successField = document.getElementsByClassName('.form-input-email-row');

                                    successField.classList.add('form-valid-data');
                                });
