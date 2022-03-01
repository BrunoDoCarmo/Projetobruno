<template>
  <section class="feature-section pt-80" data-scroll-index="1">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-7">
          <div class="section-title text-center md-30 wow fadeInUp">
            <h1 class="md-25 wow fadeInUp" data-wow-delay=".2s">
              Awsome <span>Features</span>
            </h1>
            <p class=" wow fadeInUp" data-wow-delay=".4s">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad porro est quos molestias quas natus sapiente dignissimos reiciendis, animi consequuntur, laborum, asperiores fugiat dolorem esse placeat optio ipsam eum minus!
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="single-feature wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.2s">
            <div class="icon color-1">
              <i class="fas fa-hand-pointer"></i>
            </div>
            <div class="content">
              <h3>Easy To Usep</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In vitae eligendi saepe vel mollitia. Tempora fugiat earum repellendus excepturi qui iusto, amet accusantium tempore maiores, quod ipsa sit, error maxime.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-feature wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.4s">
            <div class="icon color-2">
              <i class="fas fa-hand-holding-usd"></i>
            </div>
            <div class="content">
              <h3>Save Your Mony</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In vitae eligendi saepe vel mollitia. Tempora fugiat earum repellendus excepturi qui iusto, amet accusantium tempore maiores, quod ipsa sit, error maxime.
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="single-feature wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.6s">
            <div class="icon color-3">
              <i class="fas fa-stethoscope"></i>
            </div>
            <div class="content">
              <h3>Fully Responsive</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In vitae eligendi saepe vel mollitia. Tempora fugiat earum repellendus excepturi qui iusto, amet accusantium tempore maiores, quod ipsa sit, error maxime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .feature-section .single-feature {
    padding: 30px;
    text-align: center;
    box-shadow: 0 15px 17px 0 rgba(154 154 154 / 16%);
  }
  @media only screen and (min-width: 768px) and (max-width: 991px),
    (max-width: 767px) {
    .feature-section .single-feature {
      box-shadow: none;
    }
  }
  .feature-section .single-feature .icon {
    position: relative;
    width: 75px;
    height: 75px;
    display: flex;
    margin: 0 auto 30px;
    background: #487cff;
    color: #fff;
    font-size: 40px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }
  .feature-section .single-feature .icon::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-radius: inherit;
    top: -8px;
    right: -8px;
    z-index: -1;
    opacity: 0.2;
    transition: all 0.3s ease-out 0s;
  }
  .feature-section .single-feature:hover .icon::after {
    top: 8px;
    right: 8px;
  }
  .feature-section .single-feature .icon.color-2 {
    background: #ffb260;
  }
  .feature-section .single-feature .icon.color-3 {
    background: #ff92a5;
  }
  .feature-section .single-feature .content h3 {
    font-weight: 600;
    margin-bottom: 25px;
  }
</style>