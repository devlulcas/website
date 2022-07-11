<!--TS-->
<script>
  import Input from "$lib/Input.svelte";
  import {
    faMailBulk,
    faMessage,
    faSignature,
  } from "@fortawesome/free-solid-svg-icons";
  import Submit from "$lib/Submit.svelte";
  import { content } from "$stores/Translation";
</script>

<!--HTML-->
<form>
  <Input
    icon={faSignature}
    label={$content.contact.fields.nameLabel}
    type="text"
    name="name"
    placeholder={$content.contact.fields.nameLabel}
  />

  <Input
    icon={faMailBulk}
    label={$content.contact.fields.mailLabel}
    type="email"
    name="email"
    placeholder={$content.contact.fields.mailLabel}
  />

  <Input
    icon={faMessage}
    label={$content.contact.fields.subjectLabel}
    type="text"
    name="subject"
    placeholder={$content.contact.fields.subjectLabel}
  />

  <Input
    icon={faMessage}
    label={$content.contact.fields.messageLabel}
    type="area"
    name="message"
    placeholder={$content.contact.fields.messageLabel}
  />

  <Submit />
</form>

<!--CSS-->
<style lang="postcss">
  form {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 90%;

    @media screen and (min-width: 70rem) {
      width: 60%;
    }
  }
</style>
