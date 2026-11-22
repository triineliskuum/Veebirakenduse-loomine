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
                this.failedConditions.push('Password should be between 8-15 characters');
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

<style scoped>
.page-wrapper {
    background-color: #cccccc; /* Outer gray background matching wireframe */
    padding: 50px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
    border-radius: 10px;
}

.signup-box {
    background-color: #e9ede4; /* Light greenish-gray inner container box */
    padding: 40px;
    border-radius: 12px;
    width: 100%;
    max-width: 450px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.input-row {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.label {
    width: 90px;
    font-weight: 500;
    color: #333;
}

.input-row input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #ccc;
    border-radius: 20px; /* Gives inputs the smooth pill look from the wireframe */
    background-color: #ffffff;
    outline: none;
}

.button-row {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.signup-btn {
    background-color: #8da4c4; /* Soft blue-gray button color */
    color: white;
    border: none;
    padding: 10px 35px;
    border-radius: 18px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.2s;
}

.signup-btn:hover {
    background-color: #748eaa;
}

</style>