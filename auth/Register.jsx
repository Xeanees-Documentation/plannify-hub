import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Button } from '@/Components/ui/button';
import { Card, CardContent, CardHeader } from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout title='Register'>
            <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Card>
                        <CardHeader>
                            <Link href="/" className="text-4xl font-black leading-relaxed tracking-tighter">
                                Plannify<span className="text-red-500">.</span>
                            </Link>
                            <h2 className="text-lg font-medium leading-9 tracking-tight text-left text-muted-foreground">
                                Create your account
                            </h2>
                        </CardHeader>
                        <CardContent>
                            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="space-y-6" onSubmit={submit}>
                                {/* form */}
                                </form>

                                <p className="mt-10 text-sm text-center text-muted-foreground">
                                    Your member?{' '}
                                    <Link
                                        href={route('login')}
                                        className="font-semibold leading-6 text-red-500 hover:text-red-600"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </GuestLayout>
    );
}
