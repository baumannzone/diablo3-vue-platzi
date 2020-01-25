<template>
  <div class="about-view mb-5">
    <div class="text-center">
      <h1 class="font-diablo my-5">Diablo 3 Profile Finder</h1>

      <hr class="bg-dark mb-5">

      <p class="lead">
        Diablo III is a genre-defining action-RPG set in Sanctuary, a world ravaged by the eternal conflict between angels and demons.
      </p>
      <p class="lead">
        <span class="font-weight-bold">D3PF</span> allows you to enter your battle-tag to see your profile, your last played heroes, your items, skills and more.
      </p>
    </div>

    <hr class="bg-dark my-5">

    <div class="mt-5">
      <h2 class="mb-4">API Rate Limit</h2>
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

    <div class="my-5">
      <h2>Getting Started</h2>

      <p>Before you can get started using the Blizzard APIs, you must:</p>

      <ol>
        <li>Login or create a new Battle.net account.</li>
        <li>Create a client through the API Access menu option.</li>
        <li>Generate a secret for the client.</li>
        <li>Understand how Blizzard APIs work with OAuth.</li>
      </ol>

      <p class="text-break">Read more here:
        <a href="https://develop.battle.net/documentation/guides/getting-started">https://develop.battle.net/documentation/guides/getting-started</a>
      </p>
    </div>

    <hr>

  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>
