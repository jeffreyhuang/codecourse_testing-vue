<template>
  <div>
    <AppFormInput v-model="body"/>

    {{ body }}
  </div>
</template>

<script>
import AppFormInput from '@/components/elements/form/AppFormInput'

export default {
  data () {
    return {
      body: 'abc'
    }
  },

  components: {
    AppFormInput
  }
}
</script>
