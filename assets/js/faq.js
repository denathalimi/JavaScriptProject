export function FAQ () {
    return `
    <div class="container-index container">
    <div class="text-center mt-5 mb-2">
      <span class="section6-secondarytitle">FAQ</span>
      <p class="section6-title">Frequently Asked Questions</p>
    </div>
  </div>
  <div class="container-index container">
    <div class="row mt-5">
      <div class="col-md-3 ml-auto">
        <ul class="nav faqTabs">
          <li class="nav-item mb-4" role="presentation">
            <a class="faq-box nav-link active" id="getting-started-tab" data-toggle="tab" href="#getting-started-content">
              <h6 class="faq-box-title">Getting Started</h6>
            </a>
          </li>
          <li class="nav-item mb-4" role="presentation">
            <a class="faq-box nav-link" id="billind-pricing-tab" data-toggle="tab" href="#billing-pricing-content">
              <h6 class="faq-box-title">Billing and Pricing</h6>
            </a>
          </li>
          <li class="nav-item mb-4" role="presentation">
            <a class="faq-box nav-link" id="services-support-tab" data-toggle="tab" href="#services-support-content">
              <h6 class="faq-box-title">Services and Support</h6>
            </a>
          </li>
          <li class="nav-item mb-4" role="presentation">
            <a class="faq-box nav-link" id="technical-questions-tab" data-toggle="tab" href="#technical-questions-content">
              <h6 class="faq-box-title">Technical questions</h6>
            </a>
          </li>
        </ul>
      </div>
      <div class="col-md-9 mr-auto faqTab">
        <div class="tab-content" id="faqTabsContent">
          <div class="tab-pane fade active show" id="getting-started-content">
            <!-- Question 1 -->
            <div class="faq-question faq-border active" data-toggle="collapse"  data-target="#getting-started-q1">
              <text class="faq-question-title ml-3 mr-3">Who are you?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3 show" id="getting-started-q1">
                Our company name is DA International Group Ltd. and we are based in Bulgaria.
                Our brand name is AlphaVPS. Nice to meet you!
              </div>
            </div>
            <!-- Question 2 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#getting-started-q2">
              <text class="faq-question-title ml-3 mr-3">How long have you been in business?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="getting-started-q2">
                We've been in business since 2013, however our staff has worked in the IaaS
                fields much earlier.
              </div>
            </div>
            <!-- Question 3 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#getting-started-q3">
              <text class="faq-question-title ml-3 mr-3">Are you a reseller?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="getting-started-q3">
                Definitely not! We own our hardware, run our network and never outsource our
                support.
              </div>
            </div>
            <!-- Question 4 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#getting-started-q4">
              <text class="faq-question-title ml-3 mr-3">Is my data safe?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="getting-started-q4">
                Yes it is! Security is our top priority! In addition -  we are fully GDPR compliant,
                more information can be found in our privacy policy.
              </div>
            </div>
            <!-- Question 5 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#getting-started-q5">
              <text class="faq-question-title ml-3 mr-3">Is your team inhouse?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="getting-started-q5">
                Yes, and we are very proud of it! Additionally - our Sofia office is located a
                couple of floors above the server rooms
                of Telepoint-East datacenter - we are always on-site.
              </div>
            </div>
            <!-- Question 6 -->
            <div class="faq-question" data-toggle="collapse" data-target="#getting-started-q6">
              <text class="faq-question-title ml-3 mr-3">Do you offer 24/7 support?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="getting-started-q6">
                Yes, we do. No matter if weekday, weekend or Holiday - our team is always available to assist.
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="billing-pricing-content">
            <!-- Question 1 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#billing-pricing-q1">
              <text class="faq-question-title ml-3 mr-3">Who are you?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3 show" id="billing-pricing-q1">
                Our company name is DA International Group Ltd. and we are based in Bulgaria.
                Our brand name is AlphaVPS. Nice to meet you!
              </div>
            </div>
            <!-- Question 2 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#billing-pricing-q2">
              <text class="faq-question-title ml-3 mr-3">How long have you been in business?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="billing-pricing-q2">
                We've been in business since 2013, however our staff has worked in the IaaS
                fields much earlier.
              </div>
            </div>
            <!-- Question 3 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#billing-pricing-q3">
              <text class="faq-question-title ml-3 mr-3">Are you a reseller?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="billing-pricing-q3">
                Definitely not! We own our hardware, run our network and never outsource our
                support.
              </div>
            </div>
            <!-- Question 4 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#billing-pricing-q4">
              <text class="faq-question-title ml-3 mr-3 ">Is my data safe?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="billing-pricing-q4">
                Yes it is! Security is our top priority! In addition -  we are fully GDPR compliant,
                more information can be found in our privacy policy.
              </div>
            </div>
            <!-- Question 5 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#billing-pricing-q5">
              <text class="faq-question-title ml-3 mr-3">Is your team inhouse?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="billing-pricing-q5">
                Yes, and we are very proud of it! Additionally - our Sofia office is located a
                couple of floors above the server rooms
                of Telepoint-East datacenter - we are always on-site.
              </div>
            </div>
            <!-- Question 6 -->
            <div class="faq-question" data-toggle="collapse" data-target="#billing-pricing-q6">
              <text class="faq-question-title ml-3 mr-3">Do you offer 24/7 support?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="billing-pricing-q6">
                Yes, we do. No matter if weekday, weekend or Holiday - our team is always available to assist.
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="services-support-content">
            <!-- Question 1 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#services-support-q1">
              <text class="faq-question-title ml-3 mr-3">Who are you?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3 show" id="services-support-q1">
                Our company name is DA International Group Ltd. and we are based in Bulgaria.
                Our brand name is AlphaVPS. Nice to meet you!
              </div>
            </div>
            <!-- Question 2 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#services-support-q2">
              <text class="faq-question-title ml-3 mr-3">How long have you been in business?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="services-support-q2">
                We've been in business since 2013, however our staff has worked in the IaaS
                fields much earlier.
              </div>
            </div>
            <!-- Question 3 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#services-support-q3">
              <text class="faq-question-title ml-3 mr-3">Are you a reseller?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="services-support-q3">
                Definitely not! We own our hardware, run our network and never outsource our
                support.
              </div>
            </div>
            <!-- Question 4 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#services-support-q4">
              <text class="faq-question-title ml-3 mr-3">Is my data safe?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="services-support-q4">
                Yes it is! Security is our top priority! In addition -  we are fully GDPR compliant,
                more information can be found in our privacy policy.
              </div>
            </div>
            <!-- Question 5 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#services-support-q5">
              <text class="faq-question-title ml-3 mr-3">Is your team inhouse?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="services-support-q5">
                Yes, and we are very proud of it! Additionally - our Sofia office is located a
                couple of floors above the server rooms
                of Telepoint-East datacenter - we are always on-site.
              </div>
            </div>
            <!-- Question 6 -->
            <div class="faq-question" data-toggle="collapse" data-target="#services-support-q6">
              <text class="faq-question-title ml-3 mr-3">Do you offer 24/7 support?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="services-support-q6">
                Yes, we do. No matter if weekday, weekend or Holiday - our team is always available to assist.
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="technical-questions-content">
            <!-- Question 1 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#technical-questions-q1">
              <text class="faq-question-title ml-3 mr-3">Who are you?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3 show" id="technical-questions-q1">
                Our company name is DA International Group Ltd. and we are based in Bulgaria.
                Our brand name is AlphaVPS. Nice to meet you!
              </div>
            </div>
            <!-- Question 2 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#technical-question-q2">
              <text class="faq-question-title ml-3 mr-3">How long have you been in business?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="technical-question-q2">
                We've been in business since 2013, however our staff has worked in the IaaS
                fields much earlier.
              </div>
            </div>
            <!-- Question 3 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#technical-questions-q3">
              <text class="faq-question-title ml-3 mr-3">Are you a reseller?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="technical-questions-q3">
                Definitely not! We own our hardware, run our network and never outsource our
                support.
              </div>
            </div>
            <!-- Question 4 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#technical-questions-q4">
              <text class="faq-question-title ml-3 mr-3">Is my data safe?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="technical-questions-q4">
                Yes it is! Security is our top priority! In addition -  we are fully GDPR compliant,
                more information can be found in our privacy policy.
              </div>
            </div>
            <!-- Question 5 -->
            <div class="faq-question faq-border" data-toggle="collapse" data-target="#technical-questions-q5">
              <text class="faq-question-title ml-3 mr-3">Is your team inhouse?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="technical-questions-q5">
                Yes, and we are very proud of it! Additionally - our Sofia office is located a
                couple of floors above the server rooms
                of Telepoint-East datacenter - we are always on-site.
              </div>
            </div>
            <!-- Question 6 -->
            <div class="faq-question accordion-button" data-toggle="collapse" data-target="#technical-questions-q6">
              <text class="faq-question-title ml-3 mr-3">Do you offer 24/7 support?</text>
              <span class="float-right mr-3">
                <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
                </svg>
              </span>
              <div class="collapse faq-question-q ml-3 mr-3" id="technical-questions-q6">
                Yes, we do. No matter if weekday, weekend or Holiday - our team is always available to assist.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `
}