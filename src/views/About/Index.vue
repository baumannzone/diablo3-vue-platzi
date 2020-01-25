<template>
  <div class="about-view mb-5">
    <div class="text-center">
      <h1 class="font-diablo my-5">Diablo 3 Profile Finder</h1>
      <hr class="bg-dark">
      <p class="lead">
        Diablo III is a genre-defining action-RPG set in Sanctuary, a world ravaged by the eternal conflict between angels and demons.
      </p>
    </div>

    <div class="mt-5">
      <h2 class="mb-4">Rate Limit</h2>
      <b-alert show variant="dark">
        Clients exceeding these limits may experience slower service or a response error. See the
        <a href="https://develop.battle.net/documentation/guides/getting-started">Getting Started Guide</a> for more details.
      </b-alert>

      <dl class="row mt-5 text-center text-sm-left">
        <div class="col-sm-6 mb-3">
          <dt>36,000 requests per hour</dt>
          <dd>Long-term Quota</dd>
        </div>

        <div class="col-sm-6">
          <dt>100 requests per second</dt>
          <dd>Short-term Throttle</dd>
        </div>
      </dl>

    </div>

  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>
