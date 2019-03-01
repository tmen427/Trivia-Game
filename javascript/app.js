
        $(function () {
            // start of the game
            $('#questions').hide();
            $('#end').hide();
            $('button').on('click', function () {
                $('#questions').fadeIn(1000).show(1000);
                $('button').remove();

               
                var output = "";
                var win = 0;
                var loss = 0;

                function click(formId, answer) {

                    document.getElementById(formId).addEventListener("click", function () {

                        var data = new FormData(document.getElementById(formId));   // this makes a new object!
                        var output = "";
                        for (const entry of data) {  //this for loop loops through the object and gets you the value on the radio button
                            output = entry[1];


                            if (output === answer) {
                                win++;
                                if (win>3) {
                                    win = 3; 
                                }
                            }
                            else {
                                loss++;
                                if (loss>3) {
                                    loss =3; 
                                }
                            }




                        }

                        document.getElementById('wins').innerHTML = "Correct Answers: " + win;
                        document.getElementById('losses').innerHTML = "Wrong Answers: " + loss;


                    }, false);

                }

                click('firstform', 'Chicago Bulls');
                click('second', 'Air Jordan');
                click('third', '23');



                //countdown timer - when 30 seconds is up reset everything
                var timer = setInterval(count, 500);
                var sum = 30;

                function count() {

                    sum--;

                    document.getElementById("timer").innerHTML = "Time Remaining: " + sum + " seconds";
                    if (sum === 0) {
                        $('#questions').fadeOut(1000).hide();
                        $('#end').fadeIn(1000);

                        clearInterval(timer);


                        //   document.getElementById('firstform').innerHTML = " ";
                        //  document.getElementById('second').innerHTML = " ";
                        //  document.getElementById('third').innerHTML = " ";

                    }

                }


            })
        }


        )
