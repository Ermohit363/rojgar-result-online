<template>
    <section>
        <div class="bg-white dark:bg-gray-800 shadow-md p-8">
            <h1 class="text-3xl font-bold mb-6 text-center">About Us</h1>

            <div class="space-y-6 text-gray-800 dark:text-gray-200">
                <p>
                    Welcome to <strong>RojgarResultOnline.com</strong>, your trusted companion in navigating the vast
                    landscape of employment opportunities in India. Whether you're seeking the latest government job
                    notifications, exam results, admit cards, or study resources, we are here to guide you every step of
                    the way.
                </p>

                <h2 class="text-2xl font-semibold mt-4">Our Mission</h2>
                <p>
                    At RojgarResultOnline, our mission is simple: to empower job seekers with timely, accurate, and
                    comprehensive information about employment opportunities across various sectors. We aim to bridge
                    the gap between aspiring candidates and their dream jobs by providing a user-friendly platform that
                    consolidates all essential updates in one place.
                </p>

                <h2 class="text-2xl font-semibold mt-4">What We Offer</h2>
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>Latest Job Notifications:</strong> Stay informed about the newest government and private
                        job openings with details on eligibility, application procedures, and deadlines.</li>
                    <li><strong>Exam Results & Answer Keys:</strong> Access recent exam results and answer keys to
                        assess your performance and plan your next steps.</li>
                    <li><strong>Admit Cards & Exam Dates:</strong> Never miss an exam with timely updates on admit card
                        releases and schedules.</li>
                    <li><strong>Syllabus & Study Materials:</strong> Equip yourself with the necessary resources to
                        prepare effectively.</li>
                    <li><strong>State-wise & Category-wise Updates:</strong> Receive notifications tailored to your
                        location and category.</li>
                </ul>

                <h2 class="text-2xl font-semibold mt-4">Our Commitment</h2>
                <p>
                    We are committed to providing a platform that is:
                </p>
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>Reliable:</strong> Sourcing information directly from official government portals to
                        ensure accuracy.</li>
                    <li><strong>Timely:</strong> Delivering real-time updates so you stay ahead in your job search.</li>
                    <li><strong>User-Centric:</strong> Designed for easy navigation, ensuring a seamless experience.
                    </li>
                </ul>

                <h2 class="text-2xl font-semibold mt-4">Disclaimer</h2>
                <p>
                    RojgarResultOnline.com is an informational platform and is not affiliated with any government agency
                    or department. We do not charge any fees for accessing the information provided on our website. Our
                    goal is solely to assist job seekers by offering consolidated and up-to-date employment information.
                </p>

                <p class="font-semibold mt-4">Thank you for choosing <strong>RojgarResultOnline.com</strong> as your
                    career companion. We wish you the best in your job search and future endeavors.</p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const config = useRuntimeConfig()

useHead({
    title: `About Us - ${config.public.siteName}`,
    meta: [
        { name: 'description', content: 'Learn about RojgarResultOnline.com — your trusted source for the latest government job notifications, exam results, admit cards, and study resources in India.' },
        { name: 'keywords', content: 'Rojgar Result Online, government jobs India, latest job notifications, exam results India, admit cards, job alerts, study materials, Sarkari Naukri' },
        { property: 'og:title', content: `About Us - ${config.public.siteName}` },
        { property: 'og:description', content: 'Learn about RojgarResultOnline.com — your trusted source for the latest government job notifications, exam results, admit cards, and study resources in India.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${config.public.baseUrl}/about` },
        { property: 'og:image', content: `${config.public.baseUrl}/logo.png` }
    ],
    link: [
        { rel: 'canonical', href: `${config.public.baseUrl}/about` }
    ]
})
</script>
