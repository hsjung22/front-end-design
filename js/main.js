
            $(document).ready(function() {

//section 4 -- 'x' button
                $('.section4').on('click','.details-close', function(){
                    $('#close').empty();
                    $('#description').empty();
                    $('#picture').empty();
                });

//section 4 -- 1,2,3 hover function
                $('.section4').on('mouseenter','.one', function(){
                    $('.one').addClass('transition-n');
                    $('#one').addClass('transition-w');
                });
                $('.section4').on('mouseleave','.one', function(){
                    $('.one').removeClass('transition-n');
                    $('#one').removeClass('transition-w');
                });

                $('.section4').on('mouseenter','#one', function(){
                    $('.one').addClass('transition-n');
                    $('#one').addClass('transition-w');
                });
                $('.section4').on('mouseleave','#one', function(){
                    $('.one').removeClass('transition-n');
                    $('#one').removeClass('transition-w');
                });

                $('.section4').on('mouseenter','.two', function(){
                    $('.two').addClass('transition-n');
                    $('#two').addClass('transition-w');
                });
                $('.section4').on('mouseleave','.two', function(){
                    $('.two').removeClass('transition-n');
                    $('#two').removeClass('transition-w');
                });

                $('.section4').on('mouseenter','#two', function(){
                    $('.two').addClass('transition-n');
                    $('#two').addClass('transition-w');
                });
                $('.section4').on('mouseleave','#two', function(){
                    $('.two').removeClass('transition-n');
                    $('#two').removeClass('transition-w');
                });

                $('.section4').on('mouseenter','.three', function(){
                    $('.three').addClass('transition-n');
                    $('#three').addClass('transition-w');
                });
                $('.section4').on('mouseleave','.three', function(){
                    $('.three').removeClass('transition-n');
                    $('#three').removeClass('transition-w');
                });

                $('.section4').on('mouseenter','#three', function(){
                    $('.three').addClass('transition-n');
                    $('#three').addClass('transition-w');
                });
                $('.section4').on('mouseleave','#three', function(){
                    $('.three').removeClass('transition-n');
                    $('#three').removeClass('transition-w');
                });


//section 3 -- filter options
                $('#filterOptions').click(function() {

                    setTimeout(function(){
                    var ourClass = $('#filterOptions option:selected').attr('class');

                    if(ourClass == 'all') {
                        $('#holder').children('div.item').show();
                    }
                    else {
                        $('#holder').children('div:not(.' + ourClass + ')').hide();
                        $('#holder').children('div.' + ourClass).show();
                    }
                }, 1500);
                });
            });

//section 1 -- choosing states
            var availableStates = [
                "Alabama",
                "Alaska",
                "Arizona",
                "Arkansas",
                "California",
                "Colorado",
                "Connecticut",
                "Delaware",
                "District Of Columbia",
                "Florida",
                "Georgia",
                "Hawaii",
                "Idaho",
                "Illinois",
                "Indiana",
                "Iowa",
                "Kansas",
                "Kentucky",
                "Louisiana",
                "Maine",
                "Maryland",
                "Massachusetts",
                "Michigan",
                "Minnesota",
                "Mississippi",
                "Missouri",
                "Montana",
                "Nebraska",
                "Nevada",
                "New Hampshire",
                "New Jersey",
                "New Mexico",
                "New York",
                "North Carolina",
                "North Dakota",
                "Ohio",
                "Oklahoma",
                "Oregon",
                "Pennsylvania",
                "Rhode Island",
                "South Carolina",
                "South Dakota",
                "Tennessee",
                "Texas",
                "Utah",
                "Vermont",
                "Virginia",
                "Washington",
                "West Virginia",
                "Wisconsin",
                "Wyoming"
            ];
            $( "#autocomplete" ).autocomplete({
                source: availableStates
            });

            $( "#dialog" ).dialog({
                autoOpen: false,
                width: 600
            });

            window.search = function () {
                var a = $('#autocomplete')[0].value;
                $('#dialog').html('<h2>' + a + '</h2><p>Etiam gravida purus est, sed vestibulum erat rutrum in. Aliquam elementum augue ligula, at consequat dolor semper vitae. Integer velit purus, suscipit sit amet nunc id, faucibus pulvinar metus</p>');
                $( "#dialog" ).dialog( "open" );
                event.preventDefault();
            };


//section 3 -- creating section 4 dynamically
            window.details = function (order) {
                var testing = products[order];
                $('#close').html('<span class="details-close"> </span>');
                $('#description').html('<h3>' + testing.title + '</h3>' + '<p>' + testing.price + '</p>' + testing.desc);
                $('#picture').html('<img src="materials/images/' + testing.src + '" class="detail-img" alt=""/>' + testing.num);
            }

            window.products = {
            1: {
                id : 1,
                order: 1,
                'num' : '<span class="one"> </span><span class="two"> </span><span class="three"> </span>',
                'title' : 'Product Title 1',
                'price' : 'Staring at $500',
                'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.<br><br>'
                    +'<ul>'
                            + '     <li id="one">Non porta dui euismod nec</li>'
                            + '     <li id="two">Ut tristique ipsum velit</li>'
                                            + '     <li id="three">Quisque mollis justo</li>'
                    +'</ul>',
                'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                                'src'        : 'cereal_b.jpg'
            },
            2: {
                id : 2,
                order: 2,
                'num' : "",
                'title' : 'Product Title 2',
                'price' : 'Staring at $1900',
                'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
                'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                                'src'        : 'flower_b.jpg'
            },
            3: {
                id : 3,
                order: 3,
                'num' : "",
                'title' : 'Product Title 3',
                'price' : 'Staring at $2730',
                'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
                'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                                'src'        : 'machine_b.jpg'
            },
            4: {
                id : 4,
                order: 4,
                'num' : "",
                'title' : 'Product Title 4',
                'price' : 'Staring at $731',
                'desc' : 'Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis odio a, gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis erat sem, ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique ipsum velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus hendrerit ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque vestibulum. Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec.<br> <br> Mauris sed enim risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis. Sed laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit amet erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices justo nec venenatis.',
                'uri-stub'   : '/buy-mattress/iseries/iseries-hybrid/iseries-approval-super-pillow-top',
                                'src'        : 'candy_b.jpg'
            }
            }
