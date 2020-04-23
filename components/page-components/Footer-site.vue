<template>
  <footer class="site-footer mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 my-2 my-md-0">
          <h2 class="footer-title">
            Sobre nós
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt libero et neque feugiat euismod. Integer eget urna diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut sodales elit non nisl porta dictum. Fusce quis mauris vitae nisl pretium aliquet. Aliquam pulvinar turpis sapien, ac aliquam erat cursus quis. Morbi blandit vehicula nisi in vulputate.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt libero et neque feugiat euismod. Integer eget urna diam. Pellentesque habitant morbi tristique senectus et netus et
          </p>
        </div>

        <div class="col-md-6 col-lg-3 my-2 my-md-0">
          <h2 class="footer-title">
            Minha conta
          </h2>

          <ul class="module-list">
            <li>
              <nuxt-link to="/" title="">
                Minha conta
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/" title="">
                Pedidos
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/cart" title="">
                Carrinho
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="col-md-6 col-lg-3 my-2 my-md-0">
          <h2 class="footer-title">
            Endereço
          </h2>

          <address>
            R. Genesio Vieira Campos, 78 <br>
            Belo Horizonte, MG<br>
            Telefone: (31) 9 9999-9999<br>
            E-mail: info@exemple.com.br
          </address>
        </div>

        <div class="col-md-6 col-lg-3 my-2 my-md-0">
          <h2 class="footer-title">
            Siga-nos
          </h2>

          <ul class="social-media row">
            <li class="col-2">
              <a href="https://facebook.com/" target="_blank">
                <fa :icon="['fab', 'facebook-square']" />
              </a>
            </li>

            <li class="col-2">
              <a href="https://instagram.com/" target="_blank">
                <fa :icon="['fab', 'instagram']" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container">
      <p class="copy mb-0">
        Copyright &copy; Todos os direitos reservados
      </p>
    </div>
  </footer>
</template>

<script>
export default {

};
</script>
