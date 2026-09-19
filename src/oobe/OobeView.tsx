class OobeView {
	state = $state({
		color: "white",
		text: "#202124",
		step: 0,
		offlineEnabled: true,
		v86Enabled: false,
		localfsdriver: false,
		dlsize: "0MB",
	});

	constructor() {
		useChange([this.state.offlineEnabled, this.state.v86Enabled], () => {
			this.state.dlsize = "0MB";

			if (this.state.offlineEnabled) {
				this.state.dlsize = "~25MB";
			}

			if (this.state.v86Enabled) {
				this.state.dlsize = "1GB";

				if (this.state.offlineEnabled) {
					this.state.dlsize = "~1GB";
				}
			}
		});
	}

	css = css`
		color-scheme: dark;
		z-index: 9996;
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		overflow: auto;
		font-family: var(--theme-font-sans);
		background: #09090b;
		--oobe-accent: #fafafa;
		--oobe-text: #fafafa;
		--oobe-muted: #a1a1aa;
		--oobe-panel: #09090b;
		--oobe-border: #27272a;

		#oobe-top {
			box-sizing: border-box;
			height: 100%;
			min-height: 100vh;
			width: 100%;
			display: flex;
		}

		#content {
			position: relative;
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			min-height: 100vh;
			padding: clamp(32px, 7vw, 96px) clamp(24px, 8vw, 128px);
			background: var(--oobe-panel);
			overflow: auto;
		}

		#content .screen {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			min-height: calc(100vh - clamp(64px, 14vw, 192px));
			max-width: 1040px;
			margin: 0 auto;
		}

		.screen h1 {
			max-width: 600px;
			margin: 0;
			color: var(--oobe-text);
			font-size: clamp(2.25rem, 6vw, 4.5rem);
			font-weight: 700;
			letter-spacing: -0.055em;
			line-height: 1.05;
		}

		.screen #subtitle {
			margin: 16px 0 44px;
			color: var(--oobe-muted);
			font-size: 1.1rem;
			line-height: 1.6;
		}

		.screen #gridContent {
			display: grid;
			grid-template-columns: minmax(0, 1fr);
			grid-template-rows: minmax(0, 1fr) auto;
			gap: 32px;
			min-height: 0;
		}

		.screen #gridContent #topButtons {
			grid-column: 1 / span 1;
			grid-row: 1 / span 1;
		}

		.screen #gridContent #bottomButtons {
			align-self: end;
			justify-self: start;
			grid-column: 1 / span 1;
			grid-row: 2 / span 1;
		}

		.screen .preferredButton {
			display: inline-flex;
			align-items: center;
			justify-content: center;
			gap: 8px;
			min-width: 132px;
			background: #18181b;
			border: 1px solid #3f3f46;
			border-radius: 12px;
			color: white;
			height: 44px;
			padding: 0 20px;
			font-size: 0.9rem;
			font-weight: 700;
			letter-spacing: 0.01em;
			box-shadow: none;
			transition:
				transform 0.2s,
				box-shadow 0.2s,
				filter 0.2s;
		}

		.screen .preferredButton:hover {
			background: #27272a;
			border-color: #52525b;
			transform: translateY(-1px);
			box-shadow: none;
		}

		.screen button {
			background: #18181b;
			border-radius: 12px;
			border: 1px solid #3f3f46;
			color: var(--oobe-text);
			height: 44px;
			margin: 0;
			padding: 0 16px;
			cursor: pointer;
			font-family: var(--theme-font-sans);
		}

		.material-symbols-outlined {
			font-size: 1rem;
		}

		.sub {
			color: var(--oobe-muted);
			font-size: 0.84rem;
			line-height: 1.5;
			display: flex;
			align-items: center;
			gap: 6px;
			& > .material-symbols-outlined {
				color: var(--oobe-accent);
				font-size: 1rem;
			}
		}

		#features {
			max-width: 760px !important;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		#welcome {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		#welcome #gridContent {
			display: block;
		}

		#welcome #bottomButtons {
			margin-top: 48px;
		}

		#features #subtitle {
			margin-bottom: 24px;
		}

		.featureOption {
			display: flex;
			align-items: flex-start;
			gap: 14px;
			padding: 16px;
			border: 1px solid var(--oobe-border);
			border-radius: 16px;
			background: #09090b;
			cursor: pointer;
			transition:
				background 0.2s,
				border-color 0.2s,
				transform 0.2s;
		}

		.featureOption:hover {
			background: #18181b;
			border-color: #52525b;
			transform: translateY(-1px);
		}

		.featureOption + .featureOption {
			margin-top: 10px;
		}

		.featureOption:has(input:checked) {
			background: #18181b;
			border-color: #71717a;
		}

		.featureOption input {
			accent-color: var(--oobe-accent);
			width: 18px;
			height: 18px;
			margin: 2px 0 0;
			flex: 0 0 auto;
		}

		.featureCopy {
			display: flex;
			flex-direction: column;
			gap: 4px;
		}

		.featureTitle {
			color: var(--oobe-text);
			font-size: 0.95rem;
			font-weight: 600;
		}

		.featureDescription {
			color: var(--oobe-muted);
			font-size: 0.78rem;
			line-height: 1.45;
		}

		#features .sub {
			margin-top: 16px;
		}

		#features #size {
			margin-top: 24px;
			padding-top: 20px;
			color: var(--oobe-text);
			font-weight: 600;
		}

		#features #gridContent {
			min-height: 0;
			margin-top: 24px;
			grid-template-columns: minmax(0, 1fr);
		}

		#downloadingFiles {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
		}

		#downloadingFiles #subtitle {
			max-width: 480px;
			margin-bottom: 32px;
		}

		.spinner {
			box-sizing: border-box;
			width: 56px;
			height: 56px;
			border: 3px solid #27272a;
			border-top-color: #fafafa;
			border-radius: 999px;
			margin-bottom: 24px;
			animation: oobe-spin 0.8s linear infinite;
		}

		@keyframes oobe-spin {
			to {
				transform: rotate(360deg);
			}
		}

		#tracker {
			min-height: 24px;
			color: var(--oobe-muted);
			font-size: 0.85rem;
		}

		@media (max-width: 700px) {
			#content .screen {
				min-height: 0;
			}

			.screen #subtitle {
				margin-bottom: 28px;
			}

			.screen #gridContent {
				display: block;
				min-height: 0;
			}

			.screen #bottomButtons {
				margin-top: 32px;
			}

			.screen #bottomButtons .preferredButton {
				width: 100%;
			}

			#features #size {
				margin-top: 24px;
			}
		}
	`;

	steps = [
		{
			elm: (
				<div class="screen" id="welcome">
					<h1>Welcome to Magma</h1>
					<div id="subtitle">Effortless. Modern. Powerful.</div>
					<div id="gridContent">
						<div id="bottomButtons">
							<button on:click={() => this.nextStep()} class="preferredButton">
								Get Started
							</button>
						</div>
					</div>
				</div>
			),
			on: () => {},
		},
		{
			elm: (
				<div class="screen" id="features">
					<h1>Choose your experience</h1>
					<div id="subtitle">What kind of Magma user are you?</div>
					<label class="featureOption">
						<input
							type="checkbox"
							bind:checked={use(this.state.offlineEnabled)}
						/>
						<span class="featureCopy">
							<span class="featureTitle">Offline functionality</span>
							<span class="featureDescription">
								Keep using Magma when you lose your internet connection.
							</span>
						</span>
					</label>
					<label class="featureOption">
						<input type="checkbox" bind:checked={use(this.state.v86Enabled)} />
						<span class="featureCopy">
							<span class="featureTitle">Linux emulation</span>
							<span class="featureDescription">
								Run Linux applications inside your Magma workspace.
							</span>
						</span>
					</label>
					<label class="featureOption">
						<input
							type="checkbox"
							bind:checked={use(this.state.localfsdriver)}
						/>
						<span class="featureCopy">
							<span class="featureTitle">Experimental OPFS driver</span>
							<span class="featureDescription">
								Use the faster browser filesystem driver, with experimental
								stability.
							</span>
						</span>
					</label>
					<div id="size" class="sub">
						<span class="material-symbols-outlined">download</span>
						<span>{use(this.state.dlsize)} download</span>
					</div>
					<div class="sub">
						<span class="material-symbols-outlined">info</span>
						<span>These features can always be changed later in Settings.</span>
					</div>
					<div id="gridContent">
						<div id="bottomButtons">
							<button
								on:click={async () => {
									anura.settings.set("x86-disabled", !this.state.v86Enabled);
									anura.settings.set("use-sw-cache", this.state.offlineEnabled);
									anura.settings.set("applist", [
										...anura.settings.get("applist"),
										this.state.v86Enabled ? "anura.term" : "anura.ashell",
									]);

									if (this.state.localfsdriver) {
										await (window as any).idbKeyval.set("bootFromOPFS", true);
										navigator.serviceWorker.controller?.postMessage({
											anura_target: "anura.bootFromOPFS",
											value: true,
										});
									}
									this.nextStep();
								}}
								class="preferredButton"
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										fontSize: "0.7rem!important",
									}}
								>
									{$if(
										use(this.state.v86Enabled),
										<span>Next</span>,
										<span>
											<span>Finish</span>
										</span>,
									)}

									{$if(
										use(this.state.v86Enabled),
										<span class="material-symbols-outlined">
											chevron_right
										</span>,
									)}
								</div>
							</button>
						</div>
					</div>
				</div>
			),
			on: () => {},
		},
		{
			elm: (
				<div class="screen" id="downloadingFiles">
					<div id="assetsDiv" style="display:none;"></div>
					<h1>Downloading assets</h1>
					<div id="subtitle">
						For the best experience, Magma needs to download required assets.
					</div>
					<div class="spinner" aria-label="Loading"></div>
					<br />
					<span id="tracker"></span>
				</div>
			),
			on: async () => {
				await navigator.serviceWorker.controller!.postMessage({
					anura_target: "anura.cache",
					value: anura.settings.get("use-sw-cache"),
				});
				this.state.color = "var(--material-bg)";
				this.state.text = "whitesmoke";
				if (!anura.settings.get("x86-disabled")) {
					await anura.settings.set("x86-image", "alpine");
					await installx86();
				}
				if (anura.settings.get("use-sw-cache")) await preloadFiles();
				console.debug("Cached important files");

				this.complete();
			},
		},
	];

	element = (
		<div
			class={this.css}
			style={{
				backgroundColor: use(this.state.color),
				color: use(this.state.text),
			}}
		>
			<div id="oobe-top">
				<div id="content">
					{use(this.state.step, (step) => this.steps[step]!.elm)}
				</div>
			</div>
		</div>
	);

	nextStep() {
		this.state.step++;
		const step = this.steps[this.state.step]!;
		if (step.on) step.on();
	}
	async complete() {
		await anura.settings.set("oobe-complete", true);
		if (this.state.localfsdriver) {
			await anura.fs.promises.writeFile(
				"/opfs/anura_settings.json",
				JSON.stringify(anura.settings.cache),
			);
			window.location.reload(); // need to reboot to go through firstboot again if using new opfs driver
		}
		document.dispatchEvent(new Event("anura-login-completed"));
		this.element.remove();
	}
}

async function installx86(tracker = document.getElementById("tracker")) {
	console.debug("installing x86");
	await anura.fs.mkdir("/boot");
	const x86image = anura.settings.get("x86-image");
	tracker!.innerText = "Downloading x86 kernel";
	const bzimage = await fetch(anura.config.x86[x86image].bzimage);
	anura.fs.writeFile(
		"/boot/bzimage",
		Filer.Buffer(await bzimage.arrayBuffer()),
	);
	tracker!.innerText = "Downloading x86 initrd";
	const initrd = await fetch(anura.config.x86[x86image].initrd);
	anura.fs.writeFile(
		"/boot/initrd.img",
		Filer.Buffer(await initrd.arrayBuffer()),
	);

	if (typeof anura.config.x86[x86image].rootfs === "string") {
		const rootfs = await fetch(anura.config.x86[x86image].rootfs);
		const blob = await rootfs.blob();
		//@ts-ignore
		await anura.x86hdd.loadfile(blob);
	} else if (anura.config.x86[x86image].rootfs) {
		// TODO: add batching, this will bottleneck and OOM if the rootfs is too large

		console.debug("fetching");
		// const files = await Promise.all(
		//     anura.config.x86[x86image].rootfs.map((part: string) => fetch(part)),
		// );

		const files: Blob[] = [];
		let limit = 4;
		let i = 0;
		let done = false;
		let doneSoFar = 0;
		const doWhenAvail = function () {
			if (limit === 0) return;
			limit--;
			const assigned = i;
			i++;

			fetch(anura.config.x86[x86image].rootfs[assigned])
				.then(async (response) => {
					if (response.status !== 200) {
						console.error("Status code bad on chunk " + assigned);
						console.error(anura.config.x86[x86image].rootfs[assigned]);
						console.error("Finished " + doneSoFar + " chunks before error");
						anura.notifications.add({
							title: "bad chunk on x86 download",
							description: `Chunk ${assigned} gave status code ${response.status}\nClick me to reload`,
							timeout: 50000,
							callback: () => {
								location.reload();
							},
						});
						return;
					}
					files[assigned] = await response.blob();
					limit++;
					doneSoFar++;
					tracker!.innerHTML = `Downloading x86 rootfs. Chunk ${doneSoFar}/${anura.config.x86[x86image].rootfs.length} done`;
					if (i < anura.config.x86[x86image].rootfs.length) {
						doWhenAvail();
					}
					if (doneSoFar === anura.config.x86[x86image].rootfs.length) {
						done = true;
					}
					console.debug(
						anura.config.x86[x86image].rootfs.length -
							doneSoFar +
							" chunks to go",
					);
				})

				.catch((e) => {
					console.error("Error on chunk " + assigned);
					anura.notifications.add({
						title: "bad chunk on x86 download",
						description: `Chunk ${assigned} had a download error ${e}\nClick me to reload`,
						timeout: 50000,
						callback: () => {
							location.reload();
						},
					});
				}); // Peak error handling right there
		};
		doWhenAvail();
		doWhenAvail();
		doWhenAvail();
		doWhenAvail();
		while (!done) {
			await sleep(200);
		}

		console.debug("constructing blobs...");
		tracker!.innerText = "Concatenating and installing x86 rootfs";
		//@ts-ignore
		await anura.x86hdd.loadfile(new Blob(files));
	}

	console.debug("done");
}

async function preloadFiles(tracker = document.getElementById("tracker")) {
	try {
		const list = await (await fetch("cache-load.json")).json();
		/*
		 * The list has a few items that aren't exactly real
		 * as a result of the developers schizophrenia.
		 * Because of this, there will be a few errors on the fetch.
		 * These can safely be ignored, just like the voices in
		 * the developers head.
		 */
		const chunkSize = 10;
		const promises = [];
		let i = 0;
		for (const item in list) {
			promises.push(fetch(list[item]));
			if (Number(item) % chunkSize === chunkSize - 1) {
				await Promise.all(promises);
			}
			tracker!.innerText = `Downloading Magma system files, chunk ${i}/${list.length}`;
			i++;
		}
		await Promise.all(promises);
	} catch (e) {
		console.warn("error durring oobe preload", e);
	}
}
