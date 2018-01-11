const contactHtml = {
    'id': {
        enumerable: true,
        value: 'contact'
    },
    'html': {
        enumerable: true,        
        value: 
        // `<div id="form-messages"></div>
		
		// <form id="ajax-contact" method="post" action="mailer.php">
		// 	<div class="field">
		// 		<label for="name">Name:</label>
		// 		<input type="text" id="name" name="name" required>
		// 	</div>

		// 	<div class="field">
		// 		<label for="email">Email:</label>
		// 		<input type="email" id="email" name="email" required>
		// 	</div>

		// 	<div class="field">
		// 		<label for="message">Message:</label>
		// 		<textarea id="message" name="message" required></textarea>
		// 	</div>

		// 	<div class="field">
		// 		<button type="submit">Send</button>
		// 	</div>
		// </form>
	    // </div>`
        `<div id="form-messages"></div>
        <div class='contactForm-container'>
            <form id="ajax-contact" method="post" action="mailer.php">
                <h2>Send me a message</h2>
                <fieldset>
                    <input type="text" id="name" name="name" placeholder="Your name">
                </fieldset>
                <fieldset>
                    <input type="text" id="email" name="email" placeholder="Your email">
                </fieldset>
                <fieldset>
                    <textarea id="message" name="message" placeholder="Type your message here..." required></textarea>
                </fieldset>
                <fieldset>
                    <button type="submit" name="send">Send your message</button>
                </fieldset>
            </form>
        </div>`
    }
}

module.exports = contactHtml