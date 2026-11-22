<template>
    <div class="page-wrapper">
        <main class="signup-box">
            <form @submit.prevent="handleSignup">
                <div class="input-row">
                    <span class="label">Email</span>
                    <input type="email" name="email" required placeholder="Email" v-model="email">
                </div>
                
                <div class="input-row">
                    <span class="label">Password</span>
                    <input type="password" name="password" required placeholder="Password" v-model="password">
                </div>
                
                <div class="button-row">
                    <input type="submit" value="Signup" class="signup-btn">
                </div>

                <div v-if="failedConditions.length > 0" class="error-container">
                    <p class="error-title">The password is not valid :</p>
                    <ul>
                        <li v-for="(condition, index) in failedConditions" :key="index">
                            {{ condition }}
                        </li>
                    </ul>
                </div>
            </form>
        </main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            failedConditions: []
        }
    },
    methods: {
        handleSignup() {
            this.failedConditions = [];

            if (this.password.length < 8 || this.password.length >= 15){
                this.failedConditions.push('Password must be at least 8 characters and less than 15 characters');
            }

            if (!/^[A-Z]/.test(this.password)){
                this.failedConditions.push('Password must start with an uppercase letter');
            }

            if (!/[A-Z]/.test(this.password)) {
                this.failedConditions.push('Password must contain at least one uppercase letter');
            }

            const lowercaseMatches = this.password.match(/[a-z]/g);
            if (!lowercaseMatches || lowercaseMatches.length < 2) {
                this.failedConditions.push('Password must contain at least two lowercase letters');
            }

            if (!/\d/.test(this.password)) {
                this.failedConditions.push('Password must contain at least one numeric value');
            }

            if (!/_/.test(this.password)){
                this.failedConditions.push('Password must contain the character "_"');
            }

            if (this.failedConditions.length === 0) {
                this.email = '';
                this.password = '';
                alert('Password is valid!');
            }
         }
    }
}
</script>