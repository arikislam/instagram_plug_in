# instagram_plug_in
Instagram Plugin
<div class="col-md-12 left-align">
                            
                                <p>To setup the instagram feed just above the footer on all pages, Please follow the steps below.</p>
                                <h4>Step 1: Get Client ID from Instagram</h4>
                                <ol>
                                    <li>Login to your Instagram Account</li>
                                    <li>Go to <a href="https://www.instagram.com/developer/" target="_blank">https://www.instagram.com/developer/</a></li>
                                    <li>Register your application by clicking "<a href="https://www.instagram.com/developer/clients/register/" target="_blank">Register a new client</a>" button </li>
                                    <li>Enter the details as required and register</li>
                                    <li>Now you will get the <code>CLIENT ID</code></li>
                                </ol>
                                <h4>Step 2: Get Access Token from Instagram</h4>
                                <ol>
                                    <li>To obtain Access Token, Go to <a href="http://instagram.pixelunion.net/" target="_blank">http://instagram.pixelunion.net/</a></li>
                                    <li>Click on Generate Access Token</li>
                                    <li>Now Authorize the App and you'll receive the <code>Access Token</code></li>
                                </ol>
                                <h4>Step 3: Get Instagram User ID</h4>
                                <div class="alert alert-warning"> <i class="fa fa-exclamation-triangle"></i> You will need an Instagram User ID to make this feed working. (Follow the steps below)
                                    <br> <i class="fa fa-exclamation-triangle"></i> Please note that your username is NOT user id, Its a numeric vlaue eg: 123456789</div>
                                <ol>
                                    <li>Go to <a href="https://smashballoon.com/instagram-feed/find-instagram-user-id/" target="_blank">this website</a></li>
                                    <li>Enter your Instagram username and fill the captcha</li>
                                    <li>Now you will get your numeric Instagram User ID</li>
                                    <li>PS: If the above link don't work, <a href="https://google.com/search?q=What%20is%20my%20Instagram%20account%20ID%3F" target="_blank">you can google</a> to find another ways to get Instagram User ID from your Username</li>
                                </ol>
                                <h4>Step 4: Adding the details in Javascript</h4>
                                <ol>
                                    <li>Open the <code>/js/script.js</code> file</li>
                                    <li>Find the Instagram Feed Script Section (Use Ctrl + F to search)</li>
                                    <li>Now add <code>Client ID</code>, <code>Access Token</code> and your <code>Instagram User ID</code> to the script (see code below)</li>
                                    <li>Save and refresh your browser to see latest photos</li>
                                </ol>
                                <p>If you need additional customizations, you can read the plugin documentation here: <a href="http://instafeedjs.com/" target="_blank">http://instafeedjs.com/</a></p>
                                <div><div id="highlighter_607304" class="syntaxhighlighter  js"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="gutter"><div class="line number1 index0 alt2">1</div><div class="line number2 index1 alt1">2</div><div class="line number3 index2 alt2">3</div><div class="line number4 index3 alt1">4</div><div class="line number5 index4 alt2">5</div><div class="line number6 index5 alt1">6</div><div class="line number7 index6 alt2">7</div><div class="line number8 index7 alt1">8</div></td><td class="code"><div class="container"><div class="line number1 index0 alt2"><code class="js plain">...</code></div><div class="line number2 index1 alt1"><code class="js keyword">var</code> <code class="js plain">feed = </code><code class="js keyword">new</code> <code class="js plain">Instafeed({</code></div><div class="line number3 index2 alt2"><code class="js plain">get: </code><code class="js string">'user'</code><code class="js plain">,</code></div><div class="line number4 index3 alt1"><code class="js plain">userId: </code><code class="js string">'INSTAGRAM_USER_ID'</code><code class="js plain">,&nbsp; </code><code class="js comments">// User ID here</code></div><div class="line number5 index4 alt2"><code class="js plain">resolution: </code><code class="js string">'low_resolution'</code><code class="js plain">,</code></div><div class="line number6 index5 alt1"><code class="js plain">clientId: </code><code class="js string">'INSTAGRAM_CLIENT_ID_HERE'</code><code class="js plain">, </code><code class="js comments">// Client ID here</code></div><div class="line number7 index6 alt2"><code class="js plain">accessToken: </code><code class="js string">'INSTAGRAM_ACCESS_TOKEN_HERE'</code><code class="js plain">, </code><code class="js comments">// Access Token here</code></div><div class="line number8 index7 alt1"><code class="js plain">...</code></div></div></td></tr></tbody></table></div></div>
                                <!-- // end .brush:js -->
                            </div>
