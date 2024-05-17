<?php
$high_growth_text = get_field('high_growth_text');
$customer_text = get_field('customer_text');
$customer_requested_text = get_field('customer_requested_text');
$high_growth_value = get_field('high_growth_value');
$customer_value = get_field('customer_value');
$customer_requested_value = get_field('customer_requested_value');

?>

<div class="lego">
    <div class="l">
        <p class="counter"><span data-counter="<?php echo $high_growth_value ?>">0</span><span>+</span></p>
    </div>
    <div class="tc">
        <div class="wrapper">
            <div>
                <p class="counter"><span data-counter="<?php echo $customer_value ?>">0</span><span>%</span></p><svg width="212" height="51" viewBox="0 0 212 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M173.958 50.5777C176.728 50.5777 178.974 48.3323 178.974 45.5625C178.974 42.7927 176.728 40.5473 173.958 40.5473V50.5777ZM0.432739 50.5777H173.958V40.5473H0.432739V50.5777Z" fill="url(#paint0_linear_437_1151)" />
                    <path d="M191.01 31.5152C193.78 31.5152 196.025 29.2698 196.025 26.5C196.025 23.7302 193.78 21.4848 191.01 21.4848V31.5152ZM29.5206 31.5152H191.01V21.4848H29.5206V31.5152Z" fill="url(#paint1_linear_437_1151)" />
                    <path d="M205.053 10.7027C207.823 10.7027 210.068 8.45733 210.068 5.68751C210.068 2.9177 207.823 0.672319 205.053 0.672319L205.053 10.7027ZM71.6486 10.7027L205.053 10.7027L205.053 0.672319L71.6486 0.672307L71.6486 10.7027Z" fill="url(#paint2_linear_437_1151)" />
                    <circle cx="173.958" cy="45.8121" r="5.01519" fill="#DCF7DE" />
                    <circle cx="191.01" cy="26.7496" r="5.01519" fill="#DCF7DE" />
                    <circle cx="206.055" cy="5.68707" r="5.01519" fill="#DCF7DE" />
                    <defs>
                        <linearGradient id="paint0_linear_437_1151" x1="178.117" y1="45.5625" x2="0.432739" y2="45.5625" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#87E98B" />
                            <stop offset="0.665" stop-color="#DCF7DE" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_437_1151" x1="194.88" y1="26.5" x2="29.5206" y2="26.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#87E98B" />
                            <stop offset="0.657941" stop-color="#DCF7DE" stop-opacity="0" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_437_1151" x1="208.25" y1="5.68751" x2="71.6486" y2="5.6875" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#87E98B" />
                            <stop offset="0.853503" stop-color="#DCF7DE" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <p><?php echo $customer_text ?></p>
        </div>
    </div>
    <div class="bc">
        <p><?php echo $high_growth_text ?></p>
    </div>
    <div class="br">
        <div class="wrapper">
            <p class="counter"><span data-counter="<?php echo $customer_requested_value ?>">0</span></p>
            <p><?php echo $customer_requested_text ?></p>
        </div>
    </div>
    <div class="tr">
        <div class="wrapper">
            <svg width="33" height="74" viewBox="0 0 33 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="check" d="M26.4094 65.4689C26.1547 63.6676 25.3461 61.9909 24.0928 60.6641L15.0529 67.3507L10.1246 63.7078C9.91437 63.5309 9.59094 63.6797 9.59094 63.9531V69.2525C9.61116 69.5822 9.71223 69.8999 10.0114 70.1532L14.6486 73.5709C14.7618 73.6553 14.8993 73.7036 15.0529 73.7036C15.2025 73.7036 15.344 73.6553 15.4572 73.5709L26.4094 65.4689Z" fill="#2EDA50" />
                <path id="dash" d="M16.1 32V64" stroke="white" stroke-width="2" stroke-linecap="round" stroke-dasharray="4.01 4.01" />
                <path id="star" fill-rule="evenodd" clip-rule="evenodd" d="M13.5351 5.1902C14.6884 2.47534 18.5363 2.47534 19.6896 5.19019L21.7727 10.0936L26.9194 10.5247C29.8316 10.7686 31.0514 14.3682 28.8874 16.3323L24.9516 19.9045L26.2399 25.8373C26.8908 28.8348 23.4992 31.0534 21.0136 29.2562L16.6123 26.0739L12.2111 29.2562C9.72547 31.0534 6.33385 28.8348 6.98475 25.8373L8.27306 19.9045L4.33717 16.3323C2.17317 14.3683 3.39296 10.7686 6.30514 10.5247L11.4519 10.0936L13.5351 5.1902ZM17.2278 6.23605C16.9971 5.69308 16.2275 5.69308 15.9969 6.23605L13.756 11.5107C13.465 12.1957 12.8187 12.6633 12.0771 12.7254L6.52838 13.1901C5.94594 13.2389 5.70198 13.9588 6.13478 14.3516L10.3567 18.1834C10.8876 18.6653 11.121 19.3939 10.9689 20.0946L9.5986 26.4049C9.46842 27.0044 10.1467 27.4481 10.6439 27.0887L15.4369 23.6231C16.1384 23.1158 17.0862 23.1158 17.7878 23.6231L22.5808 27.0887C23.0779 27.4481 23.7563 27.0044 23.6261 26.4049L22.2558 20.0946C22.1036 19.3939 22.337 18.6653 22.868 18.1834L27.0898 14.3516C27.5226 13.9588 27.2786 13.2389 26.6962 13.1901L21.1476 12.7254C20.4059 12.6633 19.7596 12.1957 19.4686 11.5107L17.2278 6.23605Z" fill="#F8F8F4" />
            </svg>
        </div>
    </div>
    <div class="cr">
        <div class="wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.91313 4.90283C6.65175 4.90283 7.25051 5.5016 7.25051 6.24022V23.6262C7.25051 25.1035 8.44805 26.301 9.92528 26.301H27.3113C28.0499 26.301 28.6487 26.8998 28.6487 27.6384C28.6487 28.377 28.0499 28.9758 27.3113 28.9758H9.92528C6.97082 28.9758 4.57574 26.5807 4.57574 23.6262V6.24022C4.57574 5.5016 5.17451 4.90283 5.91313 4.90283Z" fill="#2EDA50" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5822 5.29454C25.0599 4.77226 24.2131 4.77226 23.6909 5.29454L21.0161 7.96931C20.4938 8.49159 20.4938 9.33838 21.0161 9.86066C21.5384 10.3829 22.3851 10.3829 22.9074 9.86066L23.2991 9.46895V12.9271C23.2991 17.3588 19.7065 20.9515 15.2748 20.9515H11.2627C10.5241 20.9515 9.92529 21.5502 9.92529 22.2888C9.92529 23.0275 10.5241 23.6262 11.2627 23.6262H15.2748C21.1838 23.6262 25.9739 18.8361 25.9739 12.9271V9.46895L26.3656 9.86066C26.8879 10.3829 27.7347 10.3829 28.257 9.86066C28.7793 9.33838 28.7793 8.49159 28.257 7.96931L25.5822 5.29454Z" fill="#2EDA50" />
            </svg>
        </div>
    </div>
</div>