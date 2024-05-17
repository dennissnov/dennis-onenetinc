<?php
$title = get_field('title');
$link = get_field('link');
$link_name = get_field('link_name');
?>

<section class="section-2">
    <div class="container">
        <div class="row">
            <div class="left">
                <h2 data-split-text-animate><?php echo $title ?></h2>
                <a class="btn" href="<?php echo $link ?>" data-split-text-animate-next>
                    <span class="text"><?php echo $link_name ?> </span><span class="icon">
                        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9743 4.9998C18.4888 4.50902 17.6974 4.50476 17.2066 4.99028C16.7158 5.47579 16.7116 6.26724 17.1971 6.75802L23.0051 12.6289H14H12.8303V15.1289H14H23.0051L17.1971 20.9998C16.7116 21.4906 16.7158 22.282 17.2066 22.7675C17.6974 23.2531 18.4888 23.2488 18.9743 22.758L26.8886 14.758C27.3705 14.271 27.3705 13.4868 26.8886 12.9998L18.9743 4.9998ZM8.49805 15.1289V12.6289H2C1.30964 12.6289 0.75 13.1886 0.75 13.8789C0.75 14.5693 1.30964 15.1289 2 15.1289H8.49805Z" fill="#F8F8F4" />
                        </svg>
                    </span>
                </a>
            </div>
            <div class="right">
                <?php get_template_part('templates/components/lego') ?>
            </div>
        </div>
    </div>
</section>