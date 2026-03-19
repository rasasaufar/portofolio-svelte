<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { portfolioData } from '$lib/data/portfolio';
	import { getSupabaseClient } from '$lib/supabaseClient';

	let isGalleryOpen = $state(false);
	let selectedExperienceIndex = $state(0);
	let selectedGalleryIndex = $state(0);
	let contactForm = $state({
		name: '',
		email: '',
		message: ''
	});
	let submitState = $state<'idle' | 'loading'>('idle');
	let toast = $state<{ type: 'success' | 'error'; message: string } | null>(null);
	let toastTimer: ReturnType<typeof setTimeout> | undefined;

	const selectedExperience = $derived(portfolioData.experiences[selectedExperienceIndex]);
	const selectedGallery = $derived(selectedExperience?.gallery ?? []);
	const selectedGalleryItem = $derived(selectedGallery[selectedGalleryIndex]);
	const coreCertificates = $derived(portfolioData.certificates.filter((certificate) => certificate.category === 'core'));
	const additionalCertificates = $derived(
		portfolioData.certificates.filter((certificate) => certificate.category === 'additional')
	);

	function openGallery(experienceIndex: number, galleryIndex: number) {
		selectedExperienceIndex = experienceIndex;
		selectedGalleryIndex = galleryIndex;
		isGalleryOpen = true;
	}

	function closeGallery() {
		isGalleryOpen = false;
	}

	function previousGalleryItem() {
		if (!selectedGallery.length) {
			return;
		}

		selectedGalleryIndex = selectedGalleryIndex <= 0 ? selectedGallery.length - 1 : selectedGalleryIndex - 1;
	}

	function nextGalleryItem() {
		if (!selectedGallery.length) {
			return;
		}

		selectedGalleryIndex = selectedGalleryIndex >= selectedGallery.length - 1 ? 0 : selectedGalleryIndex + 1;
	}

	function handleOverlayKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeGallery();
		}

		if (event.key === 'ArrowLeft') {
			previousGalleryItem();
		}

		if (event.key === 'ArrowRight') {
			nextGalleryItem();
		}
	}

	function showToast(type: 'success' | 'error', message: string) {
		toast = { type, message };

		if (toastTimer) {
			clearTimeout(toastTimer);
		}

		toastTimer = setTimeout(() => {
			toast = null;
		}, 4000);
	}

	async function handleContactSubmit(event: SubmitEvent) {
		event.preventDefault();

		if (submitState === 'loading') {
			return;
		}

		const name = contactForm.name.trim();
		const email = contactForm.email.trim();
		const message = contactForm.message.trim();

		if (!name || !email || !message) {
			showToast('error', 'Please complete Name, Email, and Message.');
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailRegex.test(email)) {
			showToast('error', 'Please enter a valid email address.');
			return;
		}

		submitState = 'loading';

		try {
			const supabase = getSupabaseClient();
			const { error } = await supabase.from('contact_messages').insert({
				name,
				email,
				message
			});

			if (error) {
				throw error;
			}

			contactForm = {
				name: '',
				email: '',
				message: ''
			};

			showToast('success', 'Message sent successfully. Thank you for reaching out.');
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'Unable to send your message right now.';
			showToast('error', errorMessage);
		} finally {
			submitState = 'idle';
		}
	}

	$effect(() => {
		if (typeof document === 'undefined') {
			return;
		}

		document.body.style.overflow = isGalleryOpen ? 'hidden' : '';

		return () => {
			document.body.style.overflow = '';
		};
	});

	onMount(() => {
		const onKeydown = (event: KeyboardEvent) => {
			if (!isGalleryOpen) {
				return;
			}

			if (event.key === 'Escape') {
				closeGallery();
			}

			if (event.key === 'ArrowLeft') {
				previousGalleryItem();
			}

			if (event.key === 'ArrowRight') {
				nextGalleryItem();
			}
		};

		window.addEventListener('keydown', onKeydown);

		return () => {
			window.removeEventListener('keydown', onKeydown);
		};
	});

	onDestroy(() => {
		if (toastTimer) {
			clearTimeout(toastTimer);
		}
	});
</script>

<section id="hero" class="section-card section-identity fade-up" style="--delay:0;" data-stamp="identity">
	<div class="section-head">
		<p class="section-kicker">Identity Console</p>
	</div>
	<div class="signal-strip" aria-hidden="true">
		<span>IT IMPLEMENTATION // INFRASTRUCTURE // GOVERNMENT TECHNOLOGY DELIVERY //</span>
		<span>IT IMPLEMENTATION // INFRASTRUCTURE // GOVERNMENT TECHNOLOGY DELIVERY //</span>
	</div>
	<div class="hero-grid">
		<div>
			<h1 class="section-title">{portfolioData.profile.name}</h1>
			<p class="statement"><strong>{portfolioData.profile.role}</strong></p>
			<p class="statement" style="margin-top: 0.75rem;">{portfolioData.profile.lead}</p>
			<div class="pill-row" style="margin-top: 1rem; margin-bottom: 1rem;">
				<span class="pill">{portfolioData.profile.availability}</span>
				{#each portfolioData.skillStack as skill}
					<span class="pill">{skill}</span>
				{/each}
			</div>
			<div class="overlay-actions">
				<a class="btn" href="#operations">View Field Operations</a>
				<a class="btn secondary" href="#contact">Open Contact Channel</a>
			</div>
		</div>
		<div class="hero-visual-stack">
			<div class="hero-photo">
				<img src="/images/profile.png" alt="Rasas portrait" loading="lazy" />
			</div>
			<div class="status-board">
				<p class="mono" style="margin: 0;">Current Focus</p>
				<div class="status-grid">
					<span>IT Implementation</span>
					<span>Server Infrastructure</span>
					<span>Data Operations</span>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="capabilities" class="section-card section-capabilities section-gap fade-up" style="--delay:1;" data-stamp="capability">
	<div class="section-head">
		<p class="section-kicker">Capability Snapshot</p>
		<h2 class="section-title">Implementation Strengths</h2>
	</div>

	<div class="grid-3" style="margin-top: 1rem;">
		{#each portfolioData.stats as stat, index}
			<div class="metric fade-up" style={`--delay:${index + 1}`}>
				<strong>{stat.value}</strong>
				<span>{stat.label}</span>
			</div>
		{/each}
	</div>

	<div class="grid-3" style="margin-top: 1rem;">
		{#each portfolioData.capabilityAreas as area, index}
			<article class="subcard punch-card fade-up" style={`--delay:${index + 2}`}>
				<h3>{area.title}</h3>
				<ul class="ul-tight" style="margin-top: 0.5rem;">
					{#each area.points as point}
						<li>{point}</li>
					{/each}
				</ul>
			</article>
		{/each}
	</div>

	<div class="grid-2" style="margin-top: 1rem;">
		<article class="subcard punch-card">
			<h3>Professional Dossier</h3>
			<div class="block-list" style="margin-top: 0.75rem;">
				{#each portfolioData.profile.biography as paragraph}
					<p style="margin: 0;">{paragraph}</p>
				{/each}
			</div>
		</article>

		<article class="subcard punch-card">
			<h3>Training and Education</h3>
			<div class="edu-list" style="margin-top: 0.75rem;">
				{#each portfolioData.education as edu}
					<div class="subcard punch-card" style="background: var(--bg-blue);">
						<div style="display:flex; gap:0.75rem; align-items:flex-start;">
							<div class="logo-chip" style="width:52px; height:52px;">
								<img src={edu.logo} alt={edu.institution} loading="lazy" />
							</div>
							<div>
								<h4>{edu.degree}</h4>
								<p class="mono" style="margin:0.15rem 0;">{edu.institution} | {edu.period}</p>
								{#if edu.gpa}
									<p class="mono" style="margin:0;">GPA: {edu.gpa}</p>
								{/if}
							</div>
						</div>
						<p style="margin:0.75rem 0 0;">{edu.description}</p>
						<div class="pill-row" style="margin-top:0.6rem;">
							{#each edu.highlights as highlight}
								<span class="pill" style="background: var(--bg-soft);">{highlight}</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</article>
	</div>
</section>

<section id="operations" class="section-card section-operations section-gap fade-up" style="--delay:2;" data-stamp="operations">
	<div class="section-head">
		<p class="section-kicker">Field Operations Timeline</p>
		<h2 class="section-title">Work Experience</h2>
	</div>

	<div class="timeline-list" style="margin-top:1rem;">
		{#each portfolioData.experiences as experience, experienceIndex}
			<article class="subcard punch-card fade-up" style={`--delay:${experienceIndex + 1}`}>
				<div class="experience-header">
					<div style="display:flex; gap:0.75rem; align-items:center;">
						<div class="logo-chip company-logo-chip">
							{#if experience.logo}
								<img src={experience.logo} alt={experience.company} loading="lazy" />
							{:else}
								<div style="width:100%; height:100%; background: var(--bg-main);"></div>
							{/if}
						</div>
						<div>
							<h3>{experience.company}</h3>
							<p class="mono" style="margin:0;">{experience.position}</p>
						</div>
					</div>
					<span class="mono">{experience.period}</span>
				</div>

				<p style="margin:0.8rem 0 0;">{experience.description}</p>

				<ul class="ul-tight" style="margin-top:0.8rem;">
					{#each experience.responsibilities as responsibility}
						<li>{responsibility}</li>
					{/each}
				</ul>

				<div class="pill-row" style="margin-top:0.8rem;">
					{#each experience.tech as tech}
						<span class="pill" style="background: var(--bg-blue);">{tech}</span>
					{/each}
				</div>

				{#if experience.gallery.length > 0}
					<div class="gallery-grid" style="margin-top:0.8rem;">
						{#each experience.gallery as item, galleryIndex}
							<button
								type="button"
								class="gallery-item"
								onclick={() => openGallery(experienceIndex, galleryIndex)}
								aria-label={`Open media ${item.caption}`}
							>
								{#if item.image}
									<img src={item.image} alt={item.caption} loading="lazy" />
								{:else}
									<div style="display:grid; place-items:center; min-height:100%;">No media</div>
								{/if}
							</button>
						{/each}
					</div>
				{/if}
			</article>
		{/each}
	</div>
</section>

<section id="laboratory" class="section-card section-laboratory section-gap fade-up" style="--delay:3;" data-stamp="lab">
	<div class="section-head">
		<p class="section-kicker">Project Laboratory</p>
		<h2 class="section-title">Case Works</h2>
	</div>

	<div class="project-list grid-3" style="margin-top:1rem;">
		{#each portfolioData.projects as project, index}
			<article class="subcard punch-card fade-up" style={`--delay:${index + 1}`}>
				<div class="project-media">
					{#if project.image}
						<img src={project.image} alt={project.name} loading="lazy" />
					{:else}
						<div style="display:grid; place-items:center; min-height:100%;">No preview</div>
					{/if}
				</div>
				<h3>{project.name}</h3>
				<p class="mono" style="margin:0.3rem 0;">{project.type}</p>
				<p style="margin:0;">{project.description}</p>

				<div class="pill-row" style="margin-top:0.65rem;">
					{#each project.tech as tech}
						<span class="pill" style="background: var(--bg-soft);">{tech}</span>
					{/each}
				</div>

				<div class="overlay-actions" style="margin-top:0.75rem;">
					{#if project.demo}
						<a class="btn" href={project.demo} target="_blank" rel="noreferrer">Open Demo</a>
					{/if}
					{#if project.github}
						<a class="btn ghost" href={project.github} target="_blank" rel="noreferrer">Source</a>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</section>

<section id="credentials" class="section-card section-credentials section-gap fade-up" style="--delay:4;" data-stamp="credentials">
	<div class="section-head">
		<p class="section-kicker">Credential Matrix</p>
		<h2 class="section-title">Achievements and Certifications</h2>
	</div>

	<div class="credential-group credential-group-core" style="margin-top:1rem;">
		<div class="credential-group-head">
			<h3>Core IT & Cloud Credentials</h3>
			<p class="mono" style="margin:0;">Priority certifications for infrastructure, cloud, and professional IT credibility</p>
		</div>

		<div class="credentials-list grid-3" style="margin-top:0.85rem;">
			{#each coreCertificates as certificate, index}
				<article class="subcard punch-card fade-up credential-card credential-card-core" style={`--delay:${index + 1}`}>
					<div class="cert-logo">
						<img src={certificate.image} alt={certificate.issuer} loading="lazy" />
					</div>
					<h4>{certificate.name}</h4>
					<p class="mono" style="margin:0.3rem 0;">{certificate.issuer} | {certificate.year}</p>
					<p style="margin:0;">{certificate.description}</p>

					{#if certificate.score}
						<p class="mono" style="margin:0.55rem 0 0;">Score: {certificate.score}</p>
					{/if}

					{#if certificate.id}
						<p class="mono" style="margin:0.2rem 0 0;">Credential ID: {certificate.id}</p>
					{/if}

					<div class="pill-row" style="margin-top:0.65rem;">
						{#each certificate.skills as skill}
							<span class="pill" style="background: var(--bg-main);">{skill}</span>
						{/each}
					</div>

					<p class="mono" style="margin:0.75rem 0 0;">{certificate.verified ? 'Verified' : 'Completed'}</p>
				</article>
			{/each}
		</div>
	</div>

	<details class="credential-group credential-group-additional" style="margin-top:1rem;">
		<summary class="credentials-summary">
			<strong>Additional Training & Design Explorations</strong>
			<span class="mono">{additionalCertificates.length} credentials</span>
		</summary>

		<div class="credentials-list grid-2 credentials-list-compact" style="margin-top:0.85rem;">
			{#each additionalCertificates as certificate}
				<article class="subcard punch-card credential-card credential-card-additional">
					<div class="cert-logo">
						<img src={certificate.image} alt={certificate.issuer} loading="lazy" />
					</div>
					<h4>{certificate.name}</h4>
					<p class="mono" style="margin:0.3rem 0;">{certificate.issuer} | {certificate.year}</p>
					<p style="margin:0;">{certificate.description}</p>

					{#if certificate.score}
						<p class="mono" style="margin:0.55rem 0 0;">Score: {certificate.score}</p>
					{/if}

					{#if certificate.id}
						<p class="mono" style="margin:0.2rem 0 0;">Credential ID: {certificate.id}</p>
					{/if}

					<div class="pill-row" style="margin-top:0.65rem;">
						{#each certificate.skills as skill}
							<span class="pill" style="background: var(--bg-soft);">{skill}</span>
						{/each}
					</div>

					<p class="mono" style="margin:0.75rem 0 0;">{certificate.verified ? 'Verified' : 'Completed'}</p>
				</article>
			{/each}
		</div>
	</details>
</section>

<section id="research" class="section-card section-research section-gap fade-up" style="--delay:5;" data-stamp="research">
	<div class="section-head">
		<p class="section-kicker">Research Spotlight</p>
		<h2 class="section-title">Publication Archive</h2>
	</div>

	{#each portfolioData.publications as publication}
		<article class="subcard punch-card" style="margin-top:1rem;">
			<h3 class="publication-title">{publication.title}</h3>
			<p class="mono" style="margin:0.4rem 0;">
				{publication.journal} | {publication.year} | {publication.status}
			</p>
			<p style="margin:0;"><strong>Authors:</strong> {publication.authors}</p>
			<p style="margin:0.75rem 0 0;">{publication.abstract}</p>

			<div class="pill-row" style="margin-top:0.65rem;">
				{#each publication.tags as tag}
					<span class="pill" style="background: var(--bg-blue);">{tag}</span>
				{/each}
			</div>

			<div class="overlay-actions" style="margin-top:0.75rem;">
				<a class="btn" href={publication.doi} target="_blank" rel="noreferrer">Read Publication</a>
			</div>
		</article>
	{/each}
</section>

<section id="contact" class="section-card section-contact section-gap fade-up" style="--delay:6;" data-stamp="contact">
	<div class="section-head">
		<p class="section-kicker">Contact Command Bar</p>
		<h2 class="section-title">Open Communication Channel</h2>
	</div>

	<div class="contact-list grid-2" style="margin-top:1rem;">
		<div class="subcard punch-card" style="background: var(--bg-soft);">
			<h3>Direct Contacts</h3>
			<div class="block-list" style="margin-top:0.75rem;">
				{#each portfolioData.contacts as contact}
					<a class="subcard punch-card" style="text-decoration:none; background: var(--bg-main);" href={contact.url} target="_blank" rel="noreferrer">
						<h4>{contact.name}</h4>
						<p style="margin:0.25rem 0 0;">{contact.handle}</p>
					</a>
				{/each}
			</div>
		</div>

		<div class="subcard punch-card" style="background: var(--bg-blue);">
			<h3>Send A Message</h3>
			<p class="mono" style="margin:0.6rem 0 0;">Your message goes straight to my inbox.</p>

			<form class="contact-form" onsubmit={handleContactSubmit}>
				<label class="form-field">
					<span class="form-label">Name</span>
					<input
						class="nb-input"
						type="text"
						name="name"
						autocomplete="name"
						bind:value={contactForm.name}
						required
					/>
				</label>

				<label class="form-field">
					<span class="form-label">Email</span>
					<input
						class="nb-input"
						type="email"
						name="email"
						autocomplete="email"
						bind:value={contactForm.email}
						required
					/>
				</label>

				<label class="form-field">
					<span class="form-label">Message</span>
					<textarea
						class="nb-input nb-textarea"
						name="message"
						bind:value={contactForm.message}
						required
					></textarea>
				</label>

				<button class="btn submit-pop" type="submit" disabled={submitState === 'loading'}>
					{submitState === 'loading' ? 'Sending...' : 'Submit Message'}
				</button>
			</form>
		</div>
	</div>

	{#if toast}
		<div class={`nb-toast ${toast.type}`} role="status" aria-live="polite">
			<p class="mono" style="margin:0;">{toast.type === 'success' ? 'Success' : 'Error'}</p>
			<p style="margin:0.35rem 0 0;">{toast.message}</p>
		</div>
	{/if}
</section>

{#if isGalleryOpen && selectedGalleryItem}
	<div
		class="overlay"
		role="dialog"
		aria-modal="true"
		aria-label="Experience media viewer"
		tabindex="-1"
		onkeydown={handleOverlayKeydown}
	>
		<button
			type="button"
			class="overlay-backdrop"
			onclick={closeGallery}
			aria-label="Close media viewer"
		></button>
		<div class="overlay-card">
			<div class="overlay-media">
				{#if selectedGalleryItem.image}
					<img src={selectedGalleryItem.image} alt={selectedGalleryItem.caption} loading="lazy" />
				{/if}
			</div>
			<div>
				<h3 style="margin:0;">{selectedGalleryItem.caption}</h3>
				<p class="mono" style="margin:0.35rem 0;">{selectedExperience?.company}</p>
				<p style="margin:0;">{selectedGalleryItem.description}</p>
			</div>
			<div class="overlay-actions">
				<button class="btn secondary" type="button" onclick={previousGalleryItem}>Previous</button>
				<button class="btn" type="button" onclick={nextGalleryItem}>Next</button>
				<button class="btn ghost" type="button" onclick={closeGallery}>Close</button>
			</div>
		</div>
	</div>
{/if}
