<template>
    <div class="sidebar-dark">
        <div class="main-wrapper">
            <div class="page-wrapper full-page">
                <div class="page-content d-flex align-items-center justify-content-center">
                    <div class="row w-100 mx-0 auth-page">
                        <div class="col-md-6 mx-auto">
                            <div class="card">
                                <div class="col-md-10 mx-auto">
                                    <div class="auth-form-wrapper px-4 py-5">

                                        <div v-if="message" class="alert alert-danger" role="alert">
                                            {{ message }}
                                        </div>

                                        <a href="#" class="noble-ui-logo d-block mb-2">Noble<span>UI</span></a>
                                        <h5 class="text-muted font-weight-normal mb-4">Welcome back! Log in to your account.</h5>

                                        <Form class="forms-sample" @submit="handleLogin" :validation-schema="schema">
                                            <div class="form-group">
                                                <label for="Email">Email address</label>
                                                <Field type="email" class="form-control" name="email" />
                                                <ErrorMessage name="email" class="error-feedback" />
                                            </div>
                                            <div class="form-group">
                                                <label for="Password">Password</label>
                                                <Field type="password" class="form-control" name="password" />
                                                <ErrorMessage name="password" class="error-feedback" />
                                            </div>
                                            <div class="mt-3 mx-auto">
                                                <button class="btn btn-primary text-white" :disabled="loading">
                                                    <span v-show="loading" class="spinner-border spinner-border-sm" ></span>
                                                    <span>Login</span>
                                                </button>
                                            </div>
                                        </Form>

                                        <a href="register.html" class="d-block mt-3 text-muted"> Not a user? Sign up </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { 
    Form, 
    Field, 
    ErrorMessage 
} from 'vee-validate'
import * as yup from 'yup';

export default {
    name: 'Login',
    components: {
        Form, 
        Field,
        ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
            email: yup.string().required('Email is required'),
            password: yup.string().required('Password is required'),
        });

        return {
            loading: false,
            message: '',
            schema,
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        },
    },
    created() {
        if (this.loggedIn) {
            // this.$router.push('/profile');
            this.$router.push('/');
        }
    },
    methods:{
        handleLogin(user) {
            this.loading = true;

            this.$store.dispatch('auth/login', user).then(
                () => {
                    // this.$router.push('/profile');
                    this.$router.push('/');
                },
                (err) => {
                    this.loading = false;
                    this.message = 
                        ( err.response && err.response.data && err.response.data.message ) || 
                        err.message ||
                        err.toString();
                }
            );
        },
    },
};
</script>

<style>
    @import '../assets/css/style.css';
</style>