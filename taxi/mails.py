import sendgrid
import os
import ssl

ssl._create_default_https_context = ssl._create_unverified_context



sg = sendgrid.SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))


data = {
    "content": [
        {
            "type": "text/html",
            "value": "<html><p>Hello, world!</p></html>"
        }
    ],
    "from": {
        "email": "sam.smith@example.com",
        "name": "Sam Smith"
    },
    "headers": {},
    "mail_settings": {
        "bypass_list_management": {
            "enable": True
        },
        "footer": {
            "enable": True,
            "html": "<p>Thanks</br>The SendGrid Team</p>",
            "text": "Thanks,/n The SendGrid Team"
        },
        "sandbox_mode": {
            "enable": False
        },
        "spam_check": {
            "enable": True,
            "post_to_url": "http://example.com/compliance",
            "threshold": 3
        }
    },
    "personalizations": [
        {
            "headers": {
                "X-Accept-Language": "en",
                "X-Mailer": "MyApp"
            },
            "subject": "Hello, World!",
            "substitutions": {
                "id": "substitutions",
                "type": "object"
            },
            "to": [
                {
                    "email": "gundotshili@gmail.com",
                    "name": "John Doe"
                }
            ]
        }
    ],
    "reply_to": {
        "email": "gundotshili@gmail.com",
        "name": "Sam Smith"
    },
    "sections": {
        "section": {
            ":sectionName1": "section 1 text",
            ":sectionName2": "section 2 text"
        }
    },
    "subject": "Hello, World!",
    "tracking_settings": {
        "click_tracking": {
            "enable": True,
            "enable_text": True
        },
        "ganalytics": {
            "enable": True,
            "utm_campaign": "[NAME OF YOUR REFERRER SOURCE]",
            "utm_content": "[USE THIS SPACE TO DIFFERENTIATE YOUR EMAIL FROM ADS]",
            "utm_medium": "[NAME OF YOUR MARKETING MEDIUM e.g. email]",
            "utm_name": "[NAME OF YOUR CAMPAIGN]",
            "utm_term": "[IDENTIFY PAID KEYWORDS HERE]"
        },
        "open_tracking": {
            "enable": True,
            "substitution_tag": "%opentrack"
        },
        "subscription_tracking": {
            "enable": False,
            "html": "If you would like to unsubscribe and stop receiving these emails <% clickhere %>.",
            "substitution_tag": "<%click here%>",
            "text": "If you would like to unsubscribe and stop receiving these emails <% click here %>."
        }
    }
}
response = sg.client.mail.send.post(request_body=data)
print(response.status_code)
print(response.body)
print(response.headers)