<template>
  <section id="page-content" class="about">
    <div class="container">
      <h2 class="title">
        Termos e serviços
      </h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper aliquet dictum. Quisque a sollicitudin risus. Praesent ut elit tortor. Aliquam ac mauris eu risus egestas tincidunt. Donec sit amet imperdiet elit. Cras vestibulum quam est, ac ultrices justo egestas pulvinar. Duis aliquet urna mauris, ut placerat nisl luctus vel. Integer quis condimentum justo. Aenean feugiat ipsum vitae massa egestas blandit. Nam metus lacus, mattis in tortor id, semper ornare augue.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  transition: 'slide-left',

  head () {
    return {
      title: `About | ${process.env.APP_NAME}`,
    };
  },
};
</script>
