<style lang="scss">
.complete_profile_image--animated {
    .complete_profile_image {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 250px;
    }

    .login_form, .complete_profile_image {
        transition: 0.3s ease;
    }
    
    .login_form {
        opacity: 0;
    }

    &.complete_profile_image--animated--show {
        .login_form {
            opacity: 1;
        }

        .complete_profile_image {
            opacity: 0;
        }
    }
}
</style>

<script>
export default {
    data() {
        return {
            name: "",
            lastName: "",
            submitLoading: false,
            showCompleteLoginForm: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.$data.showCompleteLoginForm = true;
        }, 2000);
    }
}
</script>
<template>
    <div class="complete_profile_image--animated"
        :class="showCompleteLoginForm ? 'complete_profile_image--animated--show' : undefined">
        <img src="~/assets/img/Partying-face.gif" class="complete_profile_image mb-5" />

        <div class="login_form">
            <div>
                <v-text-field v-model="name" maxlength="16" color="primary" label="Name"
                    variant="outlined"></v-text-field>

                <v-text-field v-model="lastName" maxlength="16" color="primary" label="Last Name"
                    variant="outlined"></v-text-field>

                <v-btn :disabled="name.trim().length == 0 || lastName.trim().length == 0" :loading="submitLoading"
                    class="rounded-sm" size="x-large" type="submit" color="primary" flat block>Complete Signup!</v-btn>
            </div>
        </div>
    </div>
</template>