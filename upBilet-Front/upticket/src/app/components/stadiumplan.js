"use client";

import { data } from 'autoprefixer';
import React, { useState } from 'react';

const StadiumSVG = () => {
    const [selectedId, setSelectedId] = useState(null);

    const handleClick = (event) => {
        const selectedElement = event.currentTarget;
        const selectedId2 = selectedElement.getAttribute('data-id');
        const dataSelect = selectedElement.getAttribute('data-select');
        console.log(dataSelect);

        // Parse the data-select attribute to get the color values
        const colorMap = {};
        dataSelect.split(';').forEach(pair => {
            const [key, value] = pair.split(':');
            if (key && value) {
                colorMap[key] = value;
            }
        });

        const noTicketColor = colorMap['noTicket'];
        const availableTicketColor = colorMap['ticket'];
        const selectedColor = colorMap['selected'];

        // If this element is already selected, reset all colors to their original ones
        if (selectedId2 === selectedId) {
            document.querySelectorAll(`[data-select]`).forEach(element => {
                const originalColor = element.getAttribute('data-original-color');
                element.querySelector('path').style.fill = originalColor; // Restore original color
            });

            // Clear the selected ID state
            setSelectedId(null);
            console.log("Deselected zone. Reset all colors.");
            return; // Exit the function
        }

        // Save the current color of all zones (if not already saved)
        document.querySelectorAll(`[data-select]`).forEach(element => {
            if (!element.getAttribute('data-original-color')) {
                const currentColor = window.getComputedStyle(element.querySelector('path')).fill;
                element.setAttribute('data-original-color', currentColor); // Save the current color
            }
        });

        // Update the state with the new selected ID
        setSelectedId(selectedId2);

        // Apply gray color to all elements initially
        document.querySelectorAll(`[data-select]`).forEach(element => {
            element.querySelector('path').style.fill = '#CCCCCC'; // Gray color for all elements initially
        });

        // Apply availableTicketColor to elements in the same zone as the selected element
        document.querySelectorAll(`[data-select*="zone:${colorMap['zone']}"]`).forEach(element => {
            if (element !== selectedElement) {
                element.querySelector('path').style.fill = availableTicketColor || '#CCCCCC'; // Apply availableTicketColor if exists
            }
        });

        // Apply selected color to the clicked element
        if (availableTicketColor) {
            selectedElement.querySelector('path').style.fill = availableTicketColor;
        } else if (noTicketColor) {
            selectedElement.querySelector('path').style.fill = noTicketColor;
        } else {
            selectedElement.querySelector('path').style.fill = '#CCCCCC'; // Default to gray if no other color
        }

        // Optionally, apply focus or highlight style to the selected element
        selectedElement.style.border = '2px solid #000'; // Example border to highlight selection

        console.log(`Selected ID: ${selectedId2}`);
        console.log(`NoTicket Color: ${noTicketColor}`);
        console.log(`Available Ticket Color: ${availableTicketColor}`);
    };




    return (
        <svg
            version="1.1"
            id="venueMap-3913-415"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-80 240 460 299"
            sx={{  width: '100%' ,
                display: 'flex', // Flexbox düzenini aktif eder
                alignItems: 'center', // İçeriği dikey olarak ortalar
                justifyContent: 'center', // İçeriği yatay olarak ortalar (isteğe bağlı)
            }}
        >
            {/* Inline style yerine CSS sınıfları */}
            <defs>
                <style type="text/css">@import url('https://fonts.googleapis.com/css?family=Poppins');</style>

                <style>
                    {`
                    .st0{fill:#79b954;}
                    .st1{fill:#9fcd85;}
                    .st2{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;}
                    .st3{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;}
                    .st4{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;}
                    .st5{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;}
                    .st6{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;}
                    .st7{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;}
                    .st8{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;}
                    .st9{fill:#262626;}
                    .st10{font-family:'Poppins';}
                    .st11{font-size:12.2499px;}
                    .st12{fill:#CCCCCC;}
                    .st13{fill:#FFFFFF;}
                    .st14{font-family:'Poppins';}
                    .st15{font-size:8px;}
                    .st16{font-size:10.9506px;}
                    .st17{fill:#87909A;}
                    .st18{font-size:10.9504px;}
                    .st19{font-size:10.9507px;}
                    .st20{font-size:10.95px;}
                    `}
                </style>
            </defs>
            <g>
                <g>
                    <rect x="58.6" y="348.8" className="st0" width="172" height="105.9"></rect>
                    <rect x="58.6" y="348.8" className="st1" width="14.3" height="106"></rect>
                    <rect x="90.1" y="348.8" className="st1" width="14.3" height="106"></rect>
                    <rect x="121.7" y="348.8" className="st1" width="14.3" height="106"></rect>
                    <rect x="153.2" y="348.8" className="st1" width="14.3" height="106"></rect>
                    <rect x="184.7" y="348.8" className="st1" width="14.3" height="106"></rect>
                    <rect x="216.3" y="348.8" className="st1" width="14.3" height="106"></rect>
                </g>
                <g>
                    <g>
                        <circle className="st2" cx="144.6" cy="401.8" r="19.8"></circle>
                    </g>
                    <g>
                        <g>
                            <line className="st4" x1="144.6" y1="348.8" x2="144.6" y2="454.8"></line>
                        </g>
                    </g>
                    <g>
                        <g>
                            <line className="st5" x1="203.3" y1="369.4" x2="230.3" y2="369.4"></line>
                            <line className="st6" x1="203.3" y1="434.1" x2="203.3" y2="369.4"></line>
                            <line className="st5" x1="203.3" y1="434.1" x2="230.3" y2="434.1"></line>
                        </g>
                    </g>
                    <g>
                        <g>
                            <line className="st3" x1="230.3" y1="386.8" x2="220.9" y2="386.8"></line>
                            <line className="st7" x1="220.9" y1="386.8" x2="220.9" y2="416.8"></line>
                            <line className="st3" x1="220.9" y1="416.8" x2="230.3" y2="416.8"></line>
                        </g>
                    </g>
                    <g>
                        <g>
                            <line className="st8" x1="59.2" y1="369.4" x2="85.9" y2="369.4"></line>
                            <line className="st6" x1="85.9" y1="369.4" x2="85.9" y2="434.1"></line>
                            <line className="st8" x1="85.9" y1="434.1" x2="59.2" y2="434.1"></line>
                        </g>
                    </g>
                    <g>
                        <g>
                            <line className="st3" x1="59.2" y1="386.8" x2="69.5" y2="386.8"></line>
                            <line className="st7" x1="69.5" y1="386.8" x2="69.5" y2="416.8"></line>
                            <line className="st3" x1="69.5" y1="416.8" x2="59.2" y2="416.8"></line>
                        </g>
                    </g>
                </g>
            </g>
            <text transform="matrix(1 0 0 1 98.7746 257.0723)" className="st9 st10 st11">DOĞU TRİBÜNÜ</text>
            <text transform="matrix(4.489659e-011 1 -1 4.489659e-011 354.8262 353.2451)" className="st9 st10 st11">GÜNEY TRİBÜNÜ</text>
            <text transform="matrix(-1.346898e-010 -1 1 -1.346898e-010 -64.8263 448.125)" className="st9 st10 st11">KUZEY TRİBÜNÜ</text>
            <text transform="matrix(1 0 0 1 103.9875 552.5995)" className="st9 st10 st11">BATI TRİBÜNÜ</text>
            <g id="101v" data-select="zone:VIP;zoneid:417;subzone:101v;subzoneid:381;noTicket:#a3c4e3;ticket:#3776b2;selected:#a3c4e3" data-id="417:::381" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M113.2,471h13.7v19h-13.7V471z" style={{ fill: '#a3c4e3' }}></path>
                <text transform="matrix(4.489659e-011 -1 1 4.489659e-011 123.417 489.8945)" className="st13 st14 st15">101V</text>
            </g>
            <g id="100" data-select="zone:VIP;zoneid:417;subzone:100;subzoneid:394;noTicket:#a3c4e3;ticket:#3776b2;selected:#a3c4e3" data-id="417:::394" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M130.2,471h34v19h-34V471z" style={{ fill: '#a3c4e3' }}></path>
                <text transform="matrix(1 0 0 1 137.8144 484.4686)" className="st13 st14 st16">100</text>
            </g>
            <g id="125v" data-select="zone:VIP;zoneid:417;subzone:125v;subzoneid:382;noTicket:#a3c4e3;ticket:#3776b2;selected:#a3c4e3" data-id="417:::382" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M167.4,471h13.7v19h-13.7V471z" style={{ fill: '#a3c4e3' }}></path>
                <text transform="matrix(4.489659e-011 1 -1 4.489659e-011 171.4746 471.2957)" className="st13 st14 st15">125V</text>
            </g>
            <g id="201" data-select="zone:VIP;zoneid:417;subzone:201;subzoneid:380;noTicket:#a3c4e3;ticket:#3776b2;selected:#a3c4e3" data-id="417:::380" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M96.3,495.5h30.5V508H96.3V495.5z" style={{ fill: '#a3c4e3' }}></path>
                <text transform="matrix(1 0 0 1 102.3037 504.1093)" className="st13 st14 st16">201</text>
            </g>
            <g id="202" data-select="zone:VIP;zoneid:417;subzone:202;subzoneid:379;noTicket:#a3c4e3;ticket:#3776b2;selected:#a3c4e3" data-id="417:::379" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M60.4,495.5h32.7V508H60.4V495.5z" style={{ fill: '#a3c4e3' }}></path>
                <text transform="matrix(1 0 0 1 67.4041 504.1093)" className="st13 st14 st16">202</text>
            </g>
            <g id="211" data-select="zone:VIP;zoneid:417;subzone:211;subzoneid:389;noTicket:#a3c4e3;ticket:#3776b2;selected:#a3c4e3" data-id="417:::389" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M62.5,310h30.8v-15.8h-33v15.9C61,310,61.7,310,62.5,310z" style={{ fill: '#a3c4e3' }}></path>
                <text transform="matrix(1 0 0 1 67.4706 304.2157)" className="st13 st14 st16">211</text>
            </g>
            <g id="212" data-select="zone:VIP;zoneid:417;subzone:212;subzoneid:388;noTicket:#a3c4e3;ticket:#3776b2;selected:#a3c4e3" data-id="417:::388" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M96.6,294.1H127v15.8H96.6V294.1z" style={{ fill: '#a3c4e3' }}></path>
                <text transform="matrix(1 0 0 1 102.5078 304.2157)" className="st13 st14 st16">212</text>
            </g>
            <g id="213" data-select="zone:VIP;zoneid:417;subzone:213;subzoneid:385;noTicket:#a3c4e3;ticket:#3776b2;selected:#a3c4e3" data-id="417:::385" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M130.3,294.1H164v15.8h-33.7V294.1z" style={{ fill: '#a3c4e3' }}></path>
                <text transform="matrix(1 0 0 1 137.8144 304.2157)" className="st13 st14 st16">213</text>
            </g>
            <g id="214" data-select="zone:VIP;zoneid:417;subzone:214;subzoneid:386;noTicket:#a3c4e3;ticket:#3776b2;selected:#a3c4e3" data-id="417:::386" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M167.3,294.1H198v15.8h-30.7V294.1z" style={{ fill: '#a3c4e3' }}></path>
                <text transform="matrix(1 0 0 1 173.2578 304.2157)" className="st13 st14 st16">214</text>
            </g>
            <g id="215" data-select="zone:VIP;zoneid:417;subzone:215;subzoneid:387;noTicket:#a3c4e3;ticket:#3776b2;selected:#a3c4e3" data-id="417:::387" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M201.2,294.1h32.4v15.8h-32.4V294.1L201.2,294.1z" style={{ fill: '#a3c4e3' }}></path>
                <text transform="matrix(1 0 0 1 208.0214 304.2157)" className="st13 st14 st16">215</text>
            </g>
            <g id="224" data-select="zone:VIP;zoneid:417;subzone:224;subzoneid:384;noTicket:#a3c4e3;ticket:#3776b2;selected:#a3c4e3" data-id="417:::384" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M200.7,495.5h32.8V508h-32.8V495.5L200.7,495.5z" style={{ fill: '#a3c4e3' }}></path>
                <text transform="matrix(1 0 0 1 207.6806 504.1093)" className="st13 st14 st16">224</text>
            </g>
            <g id="225" data-select="zone:VIP;zoneid:417;subzone:225;subzoneid:383;noTicket:#a3c4e3;ticket:#3776b2;selected:#a3c4e3" data-id="417:::383" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M167.4,495.5h30V508h-30V495.5z" style={{ fill: '#a3c4e3' }}></path>
                <text transform="matrix(1 0 0 1 173.0537 504.1093)" className="st13 st14 st16">225</text>
            </g>
            <g>
                <rect x="130.2" y="495.5" className="st17" width="33.9" height="12.5"></rect>
                <path className="st13" d="M133.6,500.4c0,0.4-0.1,0.9-0.4,1.1c-0.3,0.2-0.7,0.3-1.4,0.3h-0.5v1.8h-0.5v-4.7h1.1
            C133,499.1,133.6,499.5,133.6,500.4z M131.1,501.4h0.4c0.4,0,0.9-0.1,1.1-0.2s0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.6
            s-0.5-0.2-1-0.2H131L131.1,501.4L131.1,501.4L131.1,501.4z"></path>
                <path className="st13" d="M135.1,501.7v1.9h-0.5v-4.7h1.3c0.5,0,1,0.1,1.3,0.3c0.3,0.2,0.4,0.5,0.4,1c0,0.6-0.3,1-1,1.2l1.3,2h-0.6
            l-1.1-1.9h-1.1V501.7L135.1,501.7z M135.1,501.3h0.7c0.4,0,0.6-0.1,0.9-0.2c0.2-0.1,0.2-0.3,0.2-0.6c0-0.3-0.1-0.5-0.3-0.6
            s-0.4-0.2-0.9-0.2h-0.6C135.1,499.7,135.1,501.3,135.1,501.3z"></path>
                <path className="st13" d="M142.7,501.3c0,0.7-0.2,1.3-0.5,1.7c-0.3,0.4-0.9,0.6-1.5,0.6s-1.2-0.2-1.6-0.6c-0.4-0.4-0.5-1-0.5-1.7
            s0.2-1.3,0.5-1.7c0.3-0.4,0.9-0.6,1.6-0.6c0.6,0,1.2,0.2,1.5,0.6C142.5,500,142.7,500.6,142.7,501.3z M138.9,501.3
            c0,0.6,0.1,1.1,0.4,1.4s0.6,0.4,1.2,0.4c0.6,0,0.9-0.1,1.2-0.4s0.4-0.7,0.4-1.4c0-0.6-0.1-1.1-0.4-1.4c-0.3-0.3-0.6-0.4-1.2-0.4
            c-0.6,0-0.9,0.2-1.2,0.5S138.9,500.8,138.9,501.3z"></path>
                <path className="st13" d="M145.1,503.8h-0.5v-4.1h-1.5v-0.4h3.5v0.4H145v4.1H145.1z"></path>
                <path className="st13" d="M151.4,501.3c0,0.7-0.2,1.3-0.5,1.7c-0.3,0.4-0.9,0.6-1.5,0.6s-1.2-0.2-1.6-0.6s-0.5-1-0.5-1.7
            s0.2-1.3,0.5-1.7c0.3-0.4,0.9-0.6,1.6-0.6c0.6,0,1.2,0.2,1.5,0.6S151.4,500.6,151.4,501.3z M147.6,501.3c0,0.6,0.1,1.1,0.4,1.4
            s0.6,0.4,1.2,0.4c0.6,0,0.9-0.1,1.2-0.4s0.4-0.7,0.4-1.4c0-0.6-0.1-1.1-0.4-1.4c-0.3-0.3-0.6-0.4-1.2-0.4c-0.6,0-0.9,0.2-1.2,0.5
            C147.7,500.3,147.6,500.8,147.6,501.3z"></path>
                <path className="st13" d="M155.7,503.8h-0.6l-1.7-2.2L153,502v1.8h-0.5v-4.7h0.5v2.2l2-2.2h0.6l-1.8,2L155.7,503.8z"></path>
                <path className="st13" d="M160.4,501.3c0,0.7-0.2,1.3-0.5,1.7c-0.3,0.4-0.9,0.6-1.5,0.6s-1.2-0.2-1.6-0.6c-0.3-0.4-0.5-1-0.5-1.7
            s0.2-1.3,0.5-1.7c0.3-0.4,0.9-0.6,1.6-0.6c0.6,0,1.2,0.2,1.5,0.6S160.4,500.6,160.4,501.3z M156.7,501.3c0,0.6,0.1,1.1,0.4,1.4
            c0.3,0.3,0.6,0.4,1.2,0.4s0.9-0.1,1.2-0.4s0.4-0.7,0.4-1.4c0-0.6-0.1-1.1-0.4-1.4c-0.2-0.3-0.6-0.4-1.2-0.4c-0.6,0-0.9,0.2-1.2,0.5
            C156.9,500.4,156.7,500.8,156.7,501.3z"></path>
                <path className="st13" d="M161.5,503.8v-4.7h0.5v4.1h2v0.5h-2.6v0.1H161.5z"></path>
            </g>
            <g id="304" data-select="zone:Loca;zoneid:418;subzone:304;subzoneid:340;noTicket:#d99fe2;ticket:#9130CB;selected:#d99fe2" data-id="418:::340" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-19.1,474.1h-13.7c4.7,15.7,14.9,26.7,18.1,29.8l10.5-7.2C-10,491.1-15.2,483.7-19.1,474.1z" style={{ fill: '#d99fe2' }}></path>
                <text transform="matrix(0.5543 0.8323 -0.8323 0.5543 -28.1978 481.1093)" className="st13 st14 st18">304</text>
            </g>
            <g id="305" data-select="zone:Loca;zoneid:418;subzone:305;subzoneid:341;noTicket:#d99fe2;ticket:#9130CB;selected:#d99fe2" data-id="418:::341" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-35,461.3c0.2,3.3,0.7,6.4,1.4,9.5h13.4c-1.4-4.4-2.7-9.1-3.6-14.4v-19H-35V461.3z" style={{ fill: '#d99fe2' }}></path>
                <text id="_x33_05" transform="matrix(2.005828e-002 -0.9998 0.9998 2.005828e-002 -26.0877 462.1578)" className="st13 st14 st16">305</text>
            </g>
            <g id="306" data-select="zone:Loca;zoneid:418;subzone:306;subzoneid:342;noTicket:#d99fe2;ticket:#9130CB;selected:#d99fe2" data-id="418:::342" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-35,400.6h11.2v33.6H-35V400.6z" style={{ fill: '#d99fe2' }}></path>
                <text transform="matrix(2.005828e-002 -0.9998 0.9998 2.005828e-002 -26.0871 426.2418)" className="st13 st14 st16">306</text>
            </g>
            <g id="307" data-select="zone:Loca;zoneid:418;subzone:307;subzoneid:343;noTicket:#d99fe2;ticket:#9130CB;selected:#d99fe2" data-id="418:::343" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-35,367h11.2v30.3H-35V367z" style={{ fill: '#d99fe2' }}></path>
                <text transform="matrix(2.005828e-002 -0.9998 0.9998 2.005828e-002 -26.088 392.3746)" className="st13 st14 st16">307</text>
            </g>
            <g id="308" data-select="zone:Loca;zoneid:418;subzone:308;subzoneid:344;noTicket:#d99fe2;ticket:#9130CB;selected:#d99fe2" data-id="418:::344" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-35,343.3v20.4h11.2v-17c0,0,0.3-5.8,3-13.9h-12.8C-35.1,339.1-35,343.3-35,343.3z" style={{ fill: '#d99fe2' }}></path>
                <text transform="matrix(2.005828e-002 -0.9998 0.9998 2.005828e-002 -25.6688 359.6305)" className="st13 st14 st16">308</text>
            </g>
            <g id="309" data-select="zone:Loca;zoneid:418;subzone:309;subzoneid:345;noTicket:#d99fe2;ticket:#9130CB;selected:#d99fe2" data-id="418:::345" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-32.7,329.5h13.1c3.1-7.8,8.4-16.9,17.5-24.6l-10.4-7.1C-24.4,308.8-30,320.6-32.7,329.5z" style={{ fill: '#d99fe2' }}></path>
                <text transform="matrix(0.5059 -0.8626 0.8626 0.5059 -21.1726 325.6929)" className="st13 st14 st19">309</text>
            </g>
            <g id="209" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:209;subzoneid:351;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::351" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M25.1,323.7L4.2,309.2c-7.2,6-13.9,14.3-17.9,25.8h29.5C18.1,331.1,21.2,327.3,25.1,323.7z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 -3.6696 328.2113)" className="st13 st14 st16">209</text>
            </g>
            <g id="102" data-select="zone:Alt Kat;zoneid:416;subzone:102;subzoneid:390;noTicket:#8ca1da;ticket:#3452a2;selected:#8ca1da" data-id="416:::390" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M67.4,471c-2.4,0-4.8-0.4-7-1v20.1h32.7v-19H67.4V471z" style={{ fill: '#8ca1da' }}></path>
                <text transform="matrix(1 0 0 1 67.4041 486.0448)" className="st13 st14 st16">102</text>
            </g>
            <g id="111" data-select="zone:Alt Kat;zoneid:416;subzone:111;subzoneid:395;noTicket:#8ca1da;ticket:#3452a2;selected:#8ca1da" data-id="416:::395" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M66.4,332.8h1.3h25.6v-17.3h-33v18.1C62.2,333.1,64.3,332.8,66.4,332.8z" style={{ fill: '#8ca1da' }}></path>
                <text transform="matrix(1 0 0 1 67.4716 330.6161)" className="st13 st14 st16">111</text>
            </g>
            <g id="112" data-select="zone:Alt Kat;zoneid:416;subzone:112;subzoneid:396;noTicket:#8ca1da;ticket:#3452a2;selected:#8ca1da" data-id="416:::396" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M96.6,315.5H127v17.3H96.6V315.5z" style={{ fill: '#8ca1da' }}></path>
                <text transform="matrix(1 0 0 1 102.5078 330.2001)" className="st13 st14 st16">112</text>
            </g>
            <g id="113" data-select="zone:Alt Kat;zoneid:416;subzone:113;subzoneid:397;noTicket:#8ca1da;ticket:#3452a2;selected:#8ca1da" data-id="416:::397" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M130.3,315.5H164v17.3h-33.7V315.5z" style={{ fill: '#8ca1da' }}></path>
                <text transform="matrix(1 0 0 1 137.8144 330.2001)" className="st13 st14 st16">113</text>
            </g>
            <g id="114" data-select="zone:Alt Kat;zoneid:416;subzone:114;subzoneid:398;noTicket:#8ca1da;ticket:#3452a2;selected:#8ca1da" data-id="416:::398" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M167.3,315.5H198v17.3h-30.7V315.5z" style={{ fill: '#8ca1da' }}></path>
                <text transform="matrix(1 0 0 1 173.2578 330.2001)" className="st13 st14 st16">114</text>
            </g>
            <g id="115" data-select="zone:Alt Kat;zoneid:416;subzone:115;subzoneid:399;noTicket:#8ca1da;ticket:#3452a2;selected:#8ca1da" data-id="416:::399" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M225,332.8c3,0,5.8,0.5,8.6,1.4v-18.7h-32.4v17.3H225L225,332.8z" style={{ fill: '#8ca1da' }}></path>
                <text transform="matrix(1 0 0 1 208.0214 330.9345)" className="st13 st14 st16">115</text>
            </g>
            <g id="124" data-select="zone:Alt Kat;zoneid:416;subzone:124;subzoneid:393;noTicket:#8ca1da;ticket:#3452a2;selected:#8ca1da" data-id="416:::393" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M222.8,471h-22.2v19h32.8v-20.8C230.1,470.4,226.5,471,222.8,471z" style={{ fill: '#8ca1da' }}></path>
                <text transform="matrix(1 0 0 1 207.6826 485.6425)" className="st13 st14 st16">124</text>
            </g>
            <g id="125" data-select="zone:Alt Kat;zoneid:416;subzone:125;subzoneid:392;noTicket:#8ca1da;ticket:#3452a2;selected:#8ca1da" data-id="416:::392" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M184.3,471h13.1v19h-13.1V471z" style={{ fill: '#8ca1da' }}></path>
                <text transform="matrix(4.489659e-011 1 -1 4.489659e-011 186.3574 471.2954)" className="st13 st14 st16">125</text>
            </g>
            <g id="103" data-select="zone:Kenar;zoneid:415;subzone:103;subzoneid:375;noTicket:#e3dda3;ticket:#b2a637;selected:#e3dda3" data-id="415:::375" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M51.2,465c-0.2-0.2-0.4-0.3-0.6-0.5l-20.5,14.3c3,2.6,6.3,5,10.4,7.1c0,0,7,3.6,16.5,4.1v-21.2
            C55,467.7,53.1,466.5,51.2,465z" style={{ fill: '#e3dda3' }}></path>
                <text transform="matrix(1 0 0 1 34.3144 483.2382)" className="st13 st14 st16">103</text>
            </g>
            <g id="110" data-select="zone:Kenar;zoneid:415;subzone:110;subzoneid:377;noTicket:#e3dda3;ticket:#b2a637;selected:#e3dda3" data-id="415:::377" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M57,334.8v-19.3c-1.4,0.1-13.6,1.2-24.7,9.2l19.5,13.4C53.4,336.8,55.1,335.6,57,334.8z" style={{ fill: '#e3dda3' }}></path>
                <text transform="matrix(1 0 0 1 36.6664 329.2021)" className="st13 st14 st16">110</text>
            </g>
            <g id="116" data-select="zone:Kenar;zoneid:415;subzone:116;subzoneid:370;noTicket:#e3dda3;ticket:#b2a637;selected:#e3dda3" data-id="415:::370" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M238.6,336.8c1.1,0.7,2.4,1.6,3.7,2.8l21.1-15.1c-1.8-1.3-4-2.7-6.2-3.8c0,0-7.7-4.4-20.4-5v20.1
            C237.4,336,238,336.3,238.6,336.8z" style={{ fill: '#e3dda3' }}></path>
                <text transform="matrix(1 0 0 1 234.3867 330.2889)" className="st13 st14 st16">116</text>
            </g>
            <g id="123" data-select="zone:Kenar;zoneid:415;subzone:123;subzoneid:372;noTicket:#e3dda3;ticket:#b2a637;selected:#e3dda3" data-id="415:::372" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M241.7,464.7c-1.6,1.2-3.3,2.2-5.1,3.2v22.3c2.1-0.1,16.6-0.8,29-10.6l-23-15.5
            C242.3,464.1,242,464.4,241.7,464.7z" style={{ fill: '#e3dda3' }}></path>
                <text transform="matrix(1 0 0 1 241.8095 482.9922)" className="st13 st14 st16">123</text>
            </g>
            <g id="203" data-select="zone:Kenar;zoneid:415;subzone:203;subzoneid:374;noTicket:#e3dda3;ticket:#b2a637;selected:#e3dda3" data-id="415:::374" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M56.6,495.5c0,0-17.3-0.1-31.4-13.2L6.3,495.5c9,7.1,21.2,12.1,38.1,12.5h12.8v-12.5H56.6L56.6,495.5z" style={{ fill: '#e3dda3' }}></path>
                <text transform="matrix(1 0 0 1 22.3662 501.1727)" className="st13 st14 st16">203</text>
            </g>
            <g id="210" data-select="zone:Kenar;zoneid:415;subzone:210;subzoneid:376;noTicket:#e3dda3;ticket:#b2a637;selected:#e3dda3" data-id="415:::376" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M41.9,313.6c4.8-1.8,9.9-2.9,15.1-3.4v-16.1H44.9c-4.9,0-9.7,0.6-14.4,1.8c-6.4,1.7-15.3,5-23.7,11.1
            l20.8,14.4C31.6,318.4,36.3,315.6,41.9,313.6z" style={{ fill: '#e3dda3' }}></path>
                <text transform="matrix(1 0 0 1 22.5546 309.6474)" className="st13 st14 st16">210</text>
            </g>
            <g id="216" data-select="zone:Kenar;zoneid:415;subzone:216;subzoneid:371;noTicket:#e3dda3;ticket:#b2a637;selected:#e3dda3" data-id="415:::371" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M268,321l20.1-14.5c-7.1-5.5-16.3-9.8-28-11.6c-3.3-0.5-6.6-0.7-10-0.7h-13.5V310
            C240.1,310.1,255.1,311.4,268,321z" style={{ fill: '#e3dda3' }}
                ></path>
                <text transform="matrix(1 0 0 1 253.1328 309.6474)" className="st13 st14 st16">216</text>
            </g>
            <g id="223" data-select="zone:Kenar;zoneid:415;subzone:223;subzoneid:373;noTicket:#e3dda3;ticket:#b2a637;selected:#e3dda3" data-id="415:::373" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M236.7,495.4V508h15.2c0,0,19.7,0.4,37.1-12.8l-18.3-12.4C263.1,489.4,252.2,494.5,236.7,495.4z" style={{ fill: '#e3dda3' }}></path>
                <text transform="matrix(1 0 0 1 253.4569 501.6465)" className="st13 st14 st16">223</text>
            </g>
            <g id="400" data-select="zone:Üst Kat;zoneid:414;subzone:400;subzoneid:324;noTicket:#9fa4e2;ticket:#353db1;selected:#9fa4e2" data-id="414:::324" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M130.2,513.7h34v17.7h-34V513.7z" style={{ fill: '#9fa4e2' }}></path>
                <text transform="matrix(1 0 0 1 137.8144 528.5292)" className="st13 st14 st16">400</text>
            </g>
            <g id="401" data-select="zone:Üst Kat;zoneid:414;subzone:401;subzoneid:323;noTicket:#9fa4e2;ticket:#353db1;selected:#9fa4e2" data-id="414:::323" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M96.3,513.7h30.5v17.7H96.3V513.7z" style={{ fill: '#9fa4e2' }}></path>
                <text transform="matrix(1 0 0 1 102.3037 528.5292)" className="st13 st14 st16">401</text>
            </g>
            <g id="402" data-select="zone:Üst Kat;zoneid:414;subzone:402;subzoneid:322;noTicket:#9fa4e2;ticket:#353db1;selected:#9fa4e2" data-id="414:::322" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M60.4,513.7h32.7v17.7H60.4V513.7z" style={{ fill: '#9fa4e2' }}></path>
                <text transform="matrix(1 0 0 1 67.4041 528.5292)" className="st13 st14 st16">402</text>
            </g>
            <g id="403" data-select="zone:Üst Kat;zoneid:414;subzone:403;subzoneid:321;noTicket:#9fa4e2;ticket:#353db1;selected:#9fa4e2" data-id="414:::321" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M36.7,513.7c0,0-8.9,0-20-4.1L2.2,528.7c10,2.6,17.3,2.7,17.3,2.7H57v-17.7H36.7L36.7,513.7z" style={{ fill: '#9fa4e2' }}></path>
                <text transform="matrix(1 0 0 1 20.3828 526.4961)" className="st13 st14 st16">403</text>
            </g>
            <g id="412" data-select="zone:Üst Kat;zoneid:414;subzone:412;subzoneid:331;noTicket:#9fa4e2;ticket:#353db1;selected:#9fa4e2;" data-id="414:::331" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M34.9,289.1H57v-17.8H24c-3.8,0-7.5,0.2-11.2,0.7l11.6,19.3C27.6,290.3,31.1,289.6,34.9,289.1z" style={{ fill: '#9fa4e2' }}></path>
                <text transform="matrix(1 0 0 1 25.5389 287.3192)" className="st13 st14 st16">412</text>
            </g>
            <g id="413" data-select="zone:Üst Kat;zoneid:414;subzone:413;subzoneid:330;noTicket:#9fa4e2;ticket:#353db1;selected:#9fa4e2;" data-id="414:::330" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M60.3,271.3h33.2v17.8H60.3V271.3z" style={{ fill: '#9fa4e2' }}></path>
                <text transform="matrix(1 0 0 1 67.4716 286.225)" className="st13 st14 st16">413</text>
            </g>
            <g id="414" data-select="zone:Üst Kat;zoneid:414;subzone:414;subzoneid:329;noTicket:#9fa4e2;ticket:#353db1;selected:#9fa4e2" data-id="414:::329" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M96.6,271.3H127v17.8H96.6V271.3z" style={{ fill: '#9fa4e2' }}></path>
                <text transform="matrix(1 0 0 1 102.5078 286.225)" className="st13 st14 st16">414</text>
            </g>
            <g id="415" data-select="zone:Üst Kat;zoneid:414;subzone:415;subzoneid:328;noTicket:#9fa4e2;ticket:#353db1;selected:#9fa4e2" data-id="414:::328" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M130.3,271.3H164v17.8h-33.7V271.3z" style={{ fill: '#9fa4e2' }}></path>
                <text transform="matrix(1 0 0 1 137.8144 286.225)" className="st13 st14 st16">415</text>
            </g>
            <g id="416" data-select="zone:Üst Kat;zoneid:414;subzone:416;subzoneid:327;noTicket:#9fa4e2;ticket:#353db1;selected:#9fa4e2" data-id="414:::327" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M167.3,271.3H198v17.8h-30.7V271.3z" style={{ fill: '#9fa4e2' }}></path>
                <text transform="matrix(1 0 0 1 173.2578 286.225)" className="st13 st14 st16">416</text>
            </g>
            <g id="417" data-select="zone:Üst Kat;zoneid:414;subzone:417;subzoneid:326;noTicket:#9fa4e2;ticket:#353db1;selected:#9fa4e2" data-id="414:::326" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M201.2,271.3h32.4v17.8h-32.4V271.3L201.2,271.3z" style={{ fill: '#9fa4e2' }}></path>
                <text transform="matrix(1 0 0 1 208.0214 286.225)" className="st13 st14 st16">417</text>
            </g>
            <g id="427" data-select="zone:Üst Kat;zoneid:414;subzone:427;subzoneid:319;noTicket:#9fa4e2;ticket:#353db1;selected:#9fa4e2" data-id="414:::319" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M256.7,513.7h-20.1v17.7h38.9c5.4-0.4,10.3-1.1,14.9-2.2l-14.5-19.3C270.4,511.7,264,513,256.7,513.7z" style={{ fill: '#9fa4e2' }}></path>
                <text transform="matrix(1 0 0 1 254.2382 526.5713)" className="st13 st14 st16">427</text>
            </g>
            <g id="428" data-select="zone:Üst Kat;zoneid:414;subzone:428;subzoneid:320;noTicket:#9fa4e2;ticket:#353db1;selected:#9fa4e2" data-id="414:::320" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M200.7,513.7h32.8v17.7h-32.8V513.7L200.7,513.7z" style={{ fill: '#9fa4e2' }}></path>
                <text transform="matrix(1 0 0 1 207.6806 528.5292)" className="st13 st14 st16">428</text>
            </g>
            <g id="429" data-select="zone:Üst Kat;zoneid:414;subzone:429;subzoneid:325;noTicket:#9fa4e2;ticket:#353db1;selected:#9fa4e2" data-id="414:::325" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M167.4,513.7h30v17.7h-30V513.7z" style={{ fill: '#9fa4e2' }}></path>
                <text transform="matrix(1 0 0 1 173.0537 528.5292)" className="st13 st14 st16">429</text>
            </g>
            <g id="104" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:104;subzoneid:352;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::352" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M37.9,448.2c-0.7-1.4-1.3-2.8-1.8-4.3H13.5c0.1,4.4,1.4,19.7,14.2,32.5L48.2,462
            C44.7,458.5,40.9,453.9,37.9,448.2z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 21.5678 466.2821)" className="st13 st14 st16">104</text>
            </g>
            <g id="105" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:105;subzoneid:353;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::353" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M33.5,428.8v-7.2h-20v19.2H35C34.1,436.9,33.5,432.8,33.5,428.8z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 15.0013 437.2061)" className="st13 st14 st16">105</text>
            </g>
            <g id="106" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:106;subzoneid:354;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::354" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M13.5,398.4h19.9v20H13.5V398.4z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 14.1942 414.3936)" className="st13 st14 st16">106</text>
            </g>
            <g id="107" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:107;subzoneid:355;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::355" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M13.5,376.3h19.9v18.9H13.5V376.3z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 14.1942 391.7148)" className="st13 st14 st16">107</text>
            </g>
            <g id="108" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:108;subzoneid:356;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::356" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M38.6,353.6H14.7c-0.7,3.8-1.1,7.9-1.1,12.5v6.9h19.9C33.6,369.8,34.2,361.8,38.6,353.6z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 16.7181 369.3085)" className="st13 st14 st16">108</text>
            </g>
            <g id="109" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:109;subzoneid:357;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::357" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M43.6,346.3c2.1-2.3,4.1-4.4,5.7-6l-19.7-13.6c-6.1,5.1-11.5,12.7-14.3,23.5h25.2
            C41.4,349,42.4,347.7,43.6,346.3z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 22.9941 344.601)" className="st13 st14 st16">109</text>
            </g>
            <g id="117" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:117;subzoneid:363;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::363" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M249.5,346.7c1.8,2.2,3.4,4.6,4.7,6.8h28.2c-1.2-5.6-4.9-17.8-16.2-27.1L245,341.6
            C246.3,343.1,247.9,344.7,249.5,346.7z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 254.2011 346.0063)" className="st13 st14 st16">117</text>
            </g>
            <g id="118" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:118;subzoneid:362;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::362" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M259.5,374v3h23.4v-20.3h-27.1C260,366.2,259.5,374,259.5,374z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 259.9492 372.9521)" className="st13 st14 st16">118</text>
            </g>
            <g id="119" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:119;subzoneid:361;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::361" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M259.5,380.3h23.4v20h-23.4V380.3z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 261.7968 396.332)" className="st13 st14 st16">119</text>
            </g>
            <g id="120" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:120;subzoneid:360;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::360" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M259.5,403.5h23.4v20h-23.4V403.5z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 261.7968 419.5518)" className="st13 st14 st16">120</text>
            </g>
            <g id="121" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:121;subzoneid:359;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::359" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M256.3,445.1h26.5v-18.4h-23.4C259.4,433,258.4,439.2,256.3,445.1z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 260.2177 441.9598)" className="st13 st14 st16">121</text>
            </g>
            <g id="122" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:122;subzoneid:358;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::358" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M247.7,459.5c-0.8,0.8-1.6,1.5-2.4,2.2l23,15.5c6.6-6.1,12.2-15.3,14.4-28.9h-27.6
            C253.3,452.3,250.9,456.3,247.7,459.5z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 254.5947 468.8251)" className="st13 st14 st16">122</text>
            </g>
            <g id="204" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:204;subzoneid:346;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::346" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M12,463c-1.7-4.4-3-9-3.7-13.7h-25.7c0.8,7.6,4.7,29.2,21,44l19-13.3C18.6,475.7,14.9,470.1,12,463z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 -6.6358 477.3437)" className="st13 st14 st16">204</text>
            </g>
            <g id="205" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:205;subzoneid:347;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::347" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M7.7,440v-18.4h-25.2V446H8C7.8,444,7.7,442,7.7,440z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 -14.1407 439.8554)" className="st13 st14 st16">205</text>
            </g>
            <g id="206" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:206;subzoneid:348;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::348" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-17.6,391.9H7.6v26.4h-25.2V391.9z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 -14.2769 411.1337)" className="st13 st14 st16">206</text>
            </g>
            <g id="207" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:207;subzoneid:349;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::349" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-17.6,362.5H7.6v26h-25.2V362.5z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 -14.2769 381.599)" className="st13 st14 st16">207</text>
            </g>
            <g id="208" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:208;subzoneid:350;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::350" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M14,338.4h-28.8c-1.3,4.9-2.3,10.3-2.8,16.4v4.5H7.8C8.3,355.1,9.7,347,14,338.4z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 -11.1246 354.8461)" className="st13 st14 st16">208</text>
            </g>
            <g id="217" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:217;subzoneid:364;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::364" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M283.5,340.4H311c-2.9-9-8.7-21.8-20.1-31.7l-20.2,14.4C275.7,327.4,280.2,333,283.5,340.4z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 281.4677 330.621)" className="st13 st14 st16">217</text>
            </g>
            <g id="218" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:218;subzoneid:365;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::365" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M288,360.2v7.2h25.4V357c0-4.5-0.5-8.9-1.6-13.3h-27.2C286.4,348.5,287.5,354,288,360.2z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 289.7519 361.6137)" className="st13 st14 st16">218</text>
            </g>
            <g id="219" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:219;subzoneid:366;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::366" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M288,370.6h25.4v25.2H288V370.6z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 291.4433 389.3388)" className="st13 st14 st16">219</text>
            </g>
            <g id="220" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:220;subzoneid:367;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::367" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M288,399.2h25.4v25.2H288V399.2z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 291.4433 417.8564)" className="st13 st14 st16">220</text>
            </g>
            <g id="221" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:221;subzoneid:368;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::368" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M288,448.7c0,0-0.1,1.5-0.6,4.1H313c0.3-1.9,0.4-3.9,0.4-5.7v-19.4H288V448.7L288,448.7z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 291.1581 446.3047)" className="st13 st14 st16">221</text>
            </g>
            <g id="222" data-select="zone:Kale Arkası Alt Kat;zoneid:413;subzone:222;subzoneid:369;noTicket:#e29fc6;ticket:#b1357d;selected:#e29fc6" data-id="413:::369" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M273.1,480.6l18.5,12.5c9-7.7,17-19.3,20.9-37h-25.7C285.1,462.6,281.4,472.4,273.1,480.6z" style={{ fill: '#e29fc6' }}></path>
                <text transform="matrix(1 0 0 1 283.497 480.6035)" className="st13 st14 st16">222</text>
            </g>
            <g id="404" data-select="zone:Kale Arkası Üst Kat;zoneid:412;subzone:404;subzoneid:333;noTicket:#92dda8;ticket:#35a757;selected:#92dda8;" data-id="412:::333" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-1.7,498.9l-24.1,16.5c8.3,6.2,17.1,10,24.7,12.4l14.7-19.4C8.6,506.2,3.3,503.1-1.7,498.9z" style={{ fill: '#92dda8' }}></path>
                <text transform="matrix(1 0 0 1 -15.4102 519.3351)" className="st13 st14 st16">404</text>
            </g>
            <g id="405" data-select="zone:Kale Arkası Üst Kat;zoneid:412;subzone:405;subzoneid:334;noTicket:#92dda8;ticket:#35a757;selected:#92dda8;" data-id="412:::334" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-36.2,474.1h-16.4c4.8,18.4,13.9,30.8,24.2,39.3l10.9-7.6C-21.4,501.8-31.6,490.4-36.2,474.1z" style={{ fill: '#92dda8' }}></path>
                <text transform="matrix(0.5543 0.8323 -0.8323 0.5543 -45.0709 486.82)" className="st13 st14 st18">405</text>
            </g>
            <g id="406" data-select="zone:Kale Arkası Üst Kat;zoneid:412;subzone:406;subzoneid:335;noTicket:#92dda8;ticket:#35a757;selected:#92dda8;" data-id="412:::335" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-38.3,461.4v-24H-55v24.1c0.4,3.3,1,6.3,1.6,9.3H-37C-37.7,467.7-38.1,464.7-38.3,461.4z" style={{ fill: '#92dda8' }}></path>
                <text transform="matrix(2.005828e-002 -0.9998 0.9998 2.005828e-002 -42.4206 462.1598)" className="st13 st14 st16">406</text>
            </g>
            <g id="407" data-select="zone:Kale Arkası Üst Kat;zoneid:412;subzone:407;subzoneid:336;noTicket:#92dda8;ticket:#35a757;selected:#92dda8;" data-id="412:::336" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-55.1,400.6h16.7v33.6h-16.7C-55.1,434.1-55.1,400.6-55.1,400.6z" style={{ fill: '#92dda8' }}></path>
                <text transform="matrix(2.005828e-002 -0.9998 0.9998 2.005828e-002 -42.4204 426.2447)" className="st13 st14 st16">407</text>
            </g>
            <g id="408" data-select="zone:Kale Arkası Üst Kat;zoneid:412;subzone:408;subzoneid:337;noTicket:#92dda8;ticket:#35a757;selected:#92dda8;" data-id="412:::337" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-55.1,367h16.7v30.3h-16.7V367z" style={{ fill: '#92dda8' }}></path>
                <text transform="matrix(2.005828e-002 -0.9998 0.9998 2.005828e-002 -42.4212 392.3766)" className="st13 st14 st16">408</text>
            </g>
            <g id="409" data-select="zone:Kale Arkası Üst Kat;zoneid:412;subzone:409;subzoneid:338;noTicket:#92dda8;ticket:#35a757;selected:#92dda8;" data-id="412:::338" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-38.3,343.4c0-0.4-0.1-4.5,1.3-10.6h-16.9c-1.2,7-1.1,11.6-1.1,11.6v19.3h16.7
            C-38.3,363.7-38.3,343.4-38.3,343.4z" style={{ fill: '#92dda8' }}></path>
                <text transform="matrix(2.005828e-002 -0.9998 0.9998 2.005828e-002 -42.0023 359.6324)" className="st13 st14 st16">409</text>
            </g>
            <g id="410" data-select="zone:Kale Arkası Üst Kat;zoneid:412;subzone:410;subzoneid:339;noTicket:#92dda8;ticket:#35a757;selected:#92dda8;" data-id="412:::339" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M-15.3,295.8l-11.7-8.1c-16.9,12.9-23.7,29.9-26.3,41.8h17.1C-33.6,320.3-27.9,307.8-15.3,295.8z" style={{ fill: '#92dda8' }}></path>
                <text transform="matrix(0.5059 -0.8626 0.8626 0.5059 -36.8877 320.5894)" className="st13 st14 st19">410</text>
            </g>
            <g id="411" data-select="zone:Kale Arkası Üst Kat;zoneid:412;subzone:411;subzoneid:332;noTicket:#92dda8;ticket:#35a757;selected:#92dda8;" data-id="412:::332" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M21.1,292.2L9.3,272.5c-7.2,1.1-14.4,3.3-21.1,6.2c-4.6,2-8.8,4.4-12.5,6.9l24.7,17
            C6,298.6,12.8,294.9,21.1,292.2z" style={{ fill: '#92dda8' }}></path>
                <text transform="matrix(1 0 0 1 -10.9376 291.1797)" className="st13 st14 st16">411</text>
            </g>
            <g id="422" data-select="zone:Kale Arkası Üst Kat;zoneid:412;subzone:422;subzoneid:313;noTicket:#92dda8;ticket:#35a757;selected:#92dda8;" data-id="412:::313" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M318.9,367.6h27.4v29.6h-27.4V367.6z" style={{ fill: '#92dda8' }}></path>
                <text transform="matrix(1 0 0 1 323.1767 388.3886)" className="st13 st14 st16">422</text>
            </g>
            <g id="423" data-select="zone:Kale Arkası Üst Kat;zoneid:412;subzone:423;subzoneid:314;noTicket:#92dda8;ticket:#35a757;selected:#92dda8;" data-id="412:::314" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M318.9,400.4h27.4v34.2h-27.4V400.4z" style={{ fill: '#92dda8' }}></path>
                <text transform="matrix(1 0 0 1 323.1767 423.5594)" className="st13 st14 st16">423</text>
            </g>
            <g id="424" data-select="zone:Kale Arkası Üst Kat;zoneid:412;subzone:424;subzoneid:315;noTicket:#92dda8;ticket:#35a757;selected:#92dda8;" data-id="412:::315" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M346.2,437.9h-27.4v12.7c0,0-0.4,8.3-4.1,18.8h30.6c0.7-3.8,0.8-6.1,0.8-6.1v-25.4H346.2z" style={{ fill: '#92dda8' }}></path>
                <text transform="matrix(1 0 0 1 321.1171 459.6816)" className="st13 st14 st16">424</text>
            </g>
            <g id="425" data-select="zone:Kale Arkası Üst Kat;zoneid:412;subzone:425;subzoneid:316;noTicket:#92dda8;ticket:#35a757;selected:#92dda8;" data-id="412:::316" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M297.3,496.9l24.3,16.4c14.7-13.1,20.6-30.2,23.1-40.6h-31.1C310.4,480.6,305.3,489.5,297.3,496.9z" style={{ fill: '#92dda8' }}></path>
                <text transform="matrix(1 0 0 1 311.664 499.0292)" className="st13 st14 st16">425</text>
            </g>
            <g id="426" data-select="zone:Kale Arkası Üst Kat;zoneid:412;subzone:426;subzoneid:318;noTicket:#92dda8;ticket:#35a757;selected:#92dda8;" data-id="412:::318" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M279.2,508.6l14.7,19.7c10.2-2.9,18.5-7.3,25.1-12.7l-24.2-16.3C290.5,502.8,285.3,506,279.2,508.6z" style={{ fill: '#92dda8' }}></path>
                <text transform="matrix(1 0 0 1 289.7538 519.7196)" className="st13 st14 st16">426</text>
            </g>
            <g id="418" data-select="zone:Misafir;zoneid:419;subzone:418;subzoneid:309;noTicket:#e09d9d;ticket:#CB2452;selected:#e09d9d;" data-id="419:::309" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M254.6,289.1c0,0,5.4,0.2,13.1,2.2l11.4-19.7c-1.8-0.2-2.9-0.3-2.9-0.3h-39.5v17.8
            C236.8,289.1,254.6,289.1,254.6,289.1z" style={{ fill: '#e09d9d' }} ></path>
                <text transform="matrix(1 0 0 1 248.6278 287.3389)" className="st13 st14 st16">418</text>
            </g>
            <g id="419" data-select="zone:Misafir;zoneid:419;subzone:419;subzoneid:310;noTicket:#e09d9d;ticket:#CB2452;selected:#e09d9d;" data-id="419:::310" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M292.7,303.3l23.6-16.9c-12.7-9.1-26.1-12.8-33.8-14.1l-11.7,20C277.5,294.3,285.4,297.7,292.7,303.3z" style={{ fill: '#e09d9d' }}></path>
                <text transform="matrix(1 0 0 1 284.2957 293.7753)" className="st13 st14 st16">419</text>
            </g>
            <g id="420" data-select="zone:Misafir;zoneid:419;subzone:420;subzoneid:317;noTicket:#e09d9d;ticket:#CB2452;selected:#e09d9d;" data-id="419:::317" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M313,329.5h31.4c-4.4-19.5-14.3-32.5-25.2-41.1l-23.7,17C302.2,311.1,308.5,319,313,329.5z" style={{ fill: '#e09d9d' }}></path>
                <text transform="matrix(1 0 0 1 310.5078 314.9945)" className="st13 st14 st16">420</text>
            </g>
            <g id="421" data-select="zone:Misafir;zoneid:419;subzone:421;subzoneid:312;noTicket:#e09d9d;ticket:#CB2452;selected:#e09d9d;" data-id="419:::312" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M318.9,354.4v9.9h27.4v-23.1c-0.3-3-0.7-5.7-1.2-8.4h-30.8C316.4,339.1,318.1,346.2,318.9,354.4z" style={{ fill: '#e09d9d' }}></path>
                <text transform="matrix(1 0 0 1 320.8476 354.5751)" className="st13 st14 st16">421</text>
            </g>
            <g id="101" data-select="zone:Alt Kat;zoneid:416;subzone:101;subzoneid:391;noTicket:#8ca1da;ticket:#3452a2;selected:#8ca1da" data-id="416:::391" style={{ cursor: 'pointer' }}
                onClick={handleClick}>
                <path className="st12 svgshp" d="M96.3,471h13.6v19H96.3V471z" style={{ fill: '#8ca1da' }}></path>
                <text transform="matrix(4.489659e-011 -1 1 4.489659e-011 107.167 490.1953)" className="st13 st14 st20">101</text>
            </g>
            <g id="Layer_x0020_1" transform="matrix(0.10575, 0, 0, 0.115744, 89.446655, 384.266968)">
                <g id="_2364992919584">
                    <path className="fil0" d="M626.88 213.81c-20.65,0 -37.46,-16.8 -37.46,-37.45 0,-20.65 16.8,-37.44 37.46,-37.44 20.65,0 37.45,16.79 37.45,37.44 0,20.65 -16.8,37.45 -37.45,37.45zm0 -120.54c-13.48,0 -26.19,3.22 -37.46,8.93l0 -50.31 -23.65 0c-12.15,0 -21.99,9.85 -21.99,22.01l0 181.69 22.82 0c6.96,0 13.19,-3.13 17.38,-8.05 12.52,7.56 27.19,11.92 42.89,11.92 45.9,0 83.09,-37.2 83.09,-83.1 0,-45.89 -37.2,-83.09 -83.09,-83.09z"  />
                    <g>
                        <polygon className="fil0" points="734.78,259.46 780.43,259.46 780.43,101.28 734.78,101.28 " />
                        <path className="fil0" d="M780.2 78.67c0,-12.49 -10.12,-22.59 -22.59,-22.59l-22.61 0 0 32.81 45.2 0 0 -10.22z" />
                    </g>
                    <path className="fil0" d="M850.88 259.46l-45.65 0 0 -203.38 22.97 0c12.52,0 22.68,10.15 22.68,22.67l0 180.71z"  />
                    <path className="fil0" d="M1123.31 218.06c-6.05,0 -10.95,-4.91 -10.95,-10.97l0 -60.65c12.27,-0.3 22.14,-10.33 22.14,-22.67l0 -22.71 -22.14 0 0 -22.16c0,-12.6 -10.23,-22.82 -22.83,-22.82l-22.82 0 0 161.98c0,22.86 18.54,41.41 41.41,41.41l26.62 0 0 -41.41 -11.42 0z" />
                    <path className="fil1" d="M32.37 0l49.47 0 9.24 16.28 8.86 -16.28 412.73 0 0 311.34 -154.39 0 0 -6.84 0 -36.99 0 -8.05 40.46 0c44.79,0 81.09,-36.3 81.09,-81.09l0 0c0,-44.78 -36.3,-81.09 -81.09,-81.09l-19.73 0c-44.78,0 -81.09,36.3 -81.09,81.09l0 81.09 0.05 0 0 38.2 0 6.84 0 6.84 -198.06 0 -9.24 -16.28 -8.86 16.28 -49.45 0c-17.76,0 -32.37,-14.57 -32.37,-32.37l0 -55.32c37.54,0 67.97,-30.44 67.97,-67.98 0,-37.54 -30.43,-67.97 -67.97,-67.97l0 -55.34c0,-17.8 14.57,-32.37 32.37,-32.37zm170.54 255.71c6.36,-2.15 16.04,-8.4 24.49,-21.28l0 0c0,11.75 9.53,21.28 21.28,21.28l24.37 0 0 -90.34 0.06 -4.65c0,0.97 -0.02,1.96 -0.06,2.96 0,0.65 0,1.16 0,1.45l0 -1.45c0,-0.45 0,-0.96 0,-1.53l0 -64.71 -22.44 0c-12.81,0 -23.21,10.4 -23.21,23.21l0 61.79c0,15.9 -13.43,28.72 -29.53,27.71 -14.83,-0.94 -25.99,-13.97 -25.99,-28.81l0 -83.77c0,-0.07 -0.05,-0.14 -0.13,-0.14l-45.39 0c-0.05,0.05 -0.08,0.08 -0.13,0.14l-0.12 85.59c0,59.13 34.35,86.98 76.81,72.54zm191.79 -43.85l-45.14 0 0 -33.49c0,-18.47 15.02,-33.49 33.49,-33.49l11.65 0c18.46,0 33.49,15.02 33.49,33.49 0,18.46 -15.02,33.49 -33.49,33.49z"  />
                    <path className="fil0" d="M358.26 315.43l0 -4.09 -60.3 0 0 4.09c0,16.65 13.5,30.15 30.15,30.15l0 0c16.65,0 30.15,-13.5 30.15,-30.15z"  />
                    <path className="fil0" d="M923 165.3c4.73,-15.26 18.99,-26.39 35.78,-26.39 16.8,0 31.05,11.13 35.78,26.39l-71.55 0zm58.43 40.88c-6.29,4.79 -14.13,7.63 -22.62,7.63 -13.89,0 -29.6,-8.73 -33.73,-22.62l115.52 0c0.72,-3.99 1.15,-8.08 1.28,-12.25l-0 -2.59c0,-47.64 -40.1,-85.92 -88.39,-82.93 -41.39,2.57 -75.07,36.25 -77.63,77.62 -0.61,9.81 0.48,19.28 3.01,28.14l0.04 0c10.38,36.39 44.94,62.6 85.21,60.1 32.81,-2.04 60.78,-23.64 72.23,-53.11l-54.91 0z" />
                </g>
            </g>
        </svg>
    );
};

export default StadiumSVG;
