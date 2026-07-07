# JNS Pro — Field Quick Start Guide

<nav id="menu" class="jump-nav">
<details id="jump-nav-details">
<summary>☰ Menu — Jump to a Section</summary>
<ul>
<li><a href="#getting-started">Getting Started</a></li>
<li><a href="#how-this-system-works">How This System Works</a></li>
<li><a href="#running-a-race">Running a Race</a></li>
<li><a href="#session-settings">Session Settings</a></li>
<li><a href="#live-dashboard">The Live Dashboard</a></li>
<li><a href="#saving-sharing-results">Saving &amp; Sharing Results</a></li>
<li><a href="#connecting-to-wifi">Connecting to WiFi</a></li>
<li><a href="#managing-your-data">Managing Your Data</a></li>
<li><a href="#troubleshooting">If Something Goes Wrong</a></li>
</ul>
</details>
</nav>

<script>
(function () {
  var jumpNavDetails = document.getElementById('jump-nav-details');
  if (!jumpNavDetails) return;
  var links = jumpNavDetails.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      jumpNavDetails.removeAttribute('open');
    });
  }
})();
</script>

<style>
.jump-nav {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  background: linear-gradient(120deg, #155799, #159957);
  border-radius: 6px;
  margin-bottom: 1.5em;
}
.jump-nav summary {
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  list-style: none;
  padding: 0.7em 1em;
}
.jump-nav summary::-webkit-details-marker { display: none; }
.jump-nav ul {
  list-style: none;
  margin: 0;
  padding: 0.4em;
  background: #fff;
  border-radius: 0 0 6px 6px;
}
.jump-nav ul li a {
  display: block;
  padding: 0.7em 1em;
  color: #159957;
  text-decoration: none;
  border-bottom: 1px solid #eee;
}
.jump-nav ul li:last-child a { border-bottom: none; }
.jump-nav ul li a:active,
.jump-nav ul li a:hover { background: #f0f0f0; }
.back-to-menu { text-align: right; }
.back-to-menu a { text-decoration: none; }
</style>

*This is a quick-reference guide to get you up and running for testing. Full documentation, the external unit manuals, and training videos are coming separately — this is just enough to get riding.*

**Your test setup:** Main Controller + Start Lights + Finish Timer. There is no physical Gate unit in this build yet — starts are done off a wall, a block of wood, or a track stand (more on that below). Everything is already connected and ready to go — you shouldn't need to pair anything yourself this round.

[PHOTO: the full test kit laid out — main controller, lights unit, timer unit, charging cable]

---

## Getting Started {#getting-started}

### 1. What's in the Box
- Main Controller (the touchscreen unit — this does all the thinking)
- Start Lights unit
- Finish Timer unit
- Charging cable

*(No Gate unit this round — see "Starting Without a Physical Gate" below.)*

### 2. Charging & Powering On
- Charge via the USB-C port before your first session.
- Press and hold the power button to turn the controller on. Give it a few seconds to boot.

[PHOTO: power button location / charging port]

### 3. The Home Screen — A Quick Tour
When it boots up, you'll land on the Home screen with four buttons:

| Button | What it does |
|---|---|
| **Gate** | Takes you into the main timing/training screen — this is where you'll spend most of your time |
| **Connect** | For pairing external units. You may still see this button even though your Lights and Timer are already paired — it only fully hides once *all three* possible units (Gate, Lights, Timer) are linked, and there's no Gate unit this round. You shouldn't need to tap it |
| **WiFi** | Connect the controller to a WiFi network (only needed if you want to upload sessions to the website) |
| **SD Card** | Browse, upload, or delete saved sessions |

[PHOTO: Home screen]

<p class="back-to-menu"><a href="#menu">↑ Back to menu</a></p>

---

## How This System Works {#how-this-system-works}

### 4. Standalone Mode — Real Training Data With Zero External Gear
Here's the important bit: your **reaction time**, **G-force**, and **wheelie/pitch detection** all come from a sensor built into the main controller itself. You get real, useful training data whether or not any external unit is connected at all. The external units make it more accurate and more automatic — they don't unlock the core feature.

### 5. Setting Your Own Target Time — Practicing a Distance Without a Finish Timer
If you're using the controller without a Finish Timer, you can tell it roughly how long you expect a given distance to take you (a "SPRINT" time, set in Gate Settings). The run will end at that time instead of a measured finish. It's an estimate, not a real measured finish — but it's enough to train reaction time and get a decent G-force/speed readout without needing the Timer unit. *(For this test round, your Finish Timer is connected, so this isn't something you need to touch — good to know it's there if you ever ride without it.)*

### 6. Starting Without a Physical Gate — Wall, Block or Track Stand
No Gate unit this round means no physical gate to drop. That's fine — you already know how this works: balance against a wall, rest on a block, or track-stand at the line. When the start sequence reaches the point where a real gate would drop, the controller has already started your reaction-time and speed measurement — you just go exactly as you would off a real gate. The countdown beep sequence (see below) is your cue.

### 7. Adding External Units Later
The system is built so any of the three external units — Gate, Lights, Timer — can be added independently, in any combination. Nothing about how you use the app changes based on which ones are present; the controller just automatically uses whichever units are enabled.

<p class="back-to-menu"><a href="#menu">↑ Back to menu</a></p>

---

## Running a Race {#running-a-race}

### 8. Quick Start: Your First Run
1. From Home, tap **Gate**.
2. Tap **Reset** to arm the gate.
3. Tap **Start** when you're ready.
4. Get set and go on the sequence.
5. Check your results on the screen after you finish.

[PHOTO: Gate Pro main screen, ready to arm]

### 9. Understanding the Start Sequence
- **Reset** plays a short warning beep countdown — this is your "get set" cue, standing in for the gate being raised (whether or not a physical gate is attached).
- **Start** begins the randomized wait, then the light sequence.
- Go exactly as you would with a real gate drop — the system is already measuring by that point.

[PHOTO: start lights sequence / countdown screen]

### 10. Aborting a Start
If something's not right (false start, rider not ready, anything else), tap **Abort** — this safely cancels the run before or during the sequence.

### 11. Reading the Results Screen
After each run you'll see:
- **Reaction time**
- **Speed** (peak / average, estimated from the onboard sensor, or measured directly if the Finish Timer caught it)
- **G-force** (max / average)
- Wheelie/pitch info if relevant

The screen auto-returns after about 25 seconds, or tap it to move on immediately.

[PHOTO: results screen after a run]

### 12. Running a Full Session (Multiple Runs)
If Session Mode is switched on (see Settings below), the controller counts down runs (e.g. "3 of 5") automatically between attempts. On the final run of the session, you'll get a popup asking what to do with the data — see "What Happens at the End of a Session" below.

<p class="back-to-menu"><a href="#menu">↑ Back to menu</a></p>

---

## Session Settings {#session-settings}

### 13. Number of Runs, Distance, Volume & Brightness
Tap the gear icon on the Gate screen to open **Gate Settings**:

| Setting | What it does |
|---|---|
| **Session mode** | Turns multi-run sessions on/off |
| **Gates/session** | How many runs make up a session |
| **Distance tracking / Distance/run** | The distance your speed numbers are calculated over (5–30m, in 5m steps) |
| **SPRINT** | Your own target time — only used if no Finish Timer is connected |
| **G-FORCE** | Sets the scale of the G-force chart on your results screen (display only — doesn't change how anything is measured) |
| **Auto-transition** | Whether the app automatically moves to the next run in a session |
| **Volume / Brightness** | Speaker volume and screen brightness |
| **Dashboard QR** | Shows a QR code to connect your phone to the live dashboard (see below) |

[PHOTO: Gate Settings screen]

<p class="back-to-menu"><a href="#menu">↑ Back to menu</a></p>

---

## The Live Dashboard — Monitor, Control & Save from Any Phone {#live-dashboard}

### 14. Connecting to the Dashboard
The controller broadcasts its own WiFi network for a live dashboard — no internet connection needed for this part. Connect your phone to it (details/QR code on the Gate Settings screen) and open the address shown.

[PHOTO: Dashboard QR code on device / phone connected to dashboard]

### 15. Watching Live Results as a Parent/Coach or Spectator
Once connected, anyone on the dashboard can watch reaction time, speed, and G-force update live as the rider goes — handy for coaches or parents standing off to the side.

### 16. Starting, Resetting & Aborting Runs Remotely from the Dashboard
The dashboard isn't just a viewer — a coach or parent can also trigger Start, Reset, and Abort from their phone, without needing to touch the controller itself.

### 17. Viewing and Saving Session Data from the Dashboard
Session results are visible on the dashboard too, and can be saved from there — useful if the person managing the phone is different from whoever's running the controller trackside.

<p class="back-to-menu"><a href="#menu">↑ Back to menu</a></p>

---

## Saving & Sharing Results {#saving-sharing-results}

### 18. What Happens at the End of a Session
On the final run of a session, a popup appears with three options:
- **Save to SD** — stores the session on the SD card only
- **Save & Upload** — saves to SD *and* uploads to the analytics website (needs WiFi — see below)
- **Cancel** (✕ in the corner, or tap outside the popup) — discards this session's runs and resets, ready to start a fresh session

[PHOTO: end-of-session save popup]

### 19. Saving to the SD Card
Choosing Save to SD stores your session as a file you can find later in the SD Card screen from the Home menu.

### 20. Uploading to the Analytics Website
Choosing Save & Upload will briefly restart the controller to free up memory for the upload, then connect to WiFi and send the session to the analytics website. If WiFi isn't available, the session stays safely on the SD card and can be uploaded later.

*(Full instructions for the analytics website are in a separate document.)*

<p class="back-to-menu"><a href="#menu">↑ Back to menu</a></p>

---

## Connecting to WiFi {#connecting-to-wifi}

### 21. Connecting the Device to Your Home/Club WiFi
Uploading to the analytics website needs the controller connected to a real WiFi network (separate from its own dashboard network). From Home, tap **WiFi**, pick your network, and enter the password. This only needs to be done once — it's remembered after that.

[PHOTO: WiFi setup screen]

<p class="back-to-menu"><a href="#menu">↑ Back to menu</a></p>

---

## Managing Your Data {#managing-your-data}

### 22. Finding & Re-uploading Past Sessions from the SD Card
From Home, tap **SD Card** to see a list of saved sessions. Files already uploaded are marked as such; you can upload any not-yet-uploaded file from here manually.

[PHOTO: SD card file list screen]

<p class="back-to-menu"><a href="#menu">↑ Back to menu</a></p>

---

## If Something Goes Wrong {#troubleshooting}

### 23. Troubleshooting Common Issues
| Message / Symptom | What it means |
|---|---|
| "Device not linked" | The controller needs to be registered to the analytics website before it can upload — contact us if you see this |
| "No WiFi configured" | Set up WiFi first (see above) before trying to upload |
| "Upload Failed — Check WiFi" | Upload didn't go through, but your data is safe on the SD card — try again once WiFi is available |
| "SD Card init failed" | Remove and reinsert the SD card |
| Screen goes dark / device restarts briefly during upload | Expected — it's freeing up memory to upload. It comes back on its own within a few seconds |

### 24. Who to Contact for Help
*[add contact details here]*

<p class="back-to-menu"><a href="#menu">↑ Back to menu</a></p>
