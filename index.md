---
layout: default
title: JNS Pro Field Guide
summary: Current field-test guide for the JNS Pro BMX performance training system.
---

# Welcome {#welcome}

Thanks for helping test **JNS Pro**.

This guide is written for riders, parents and coaches using the current field-test system. It is deliberately practical: get a run started, understand what the controller is telling you, and know where to look if you want to change something.

> Use JNS Pro normally. If anything feels confusing, awkward or surprising, that feedback is useful.

## This field-test kit

The current test kit contains:

<ul class="kit-grid">
<li>JNS Pro Controller</li>
<li>JNS Lights</li>
<li>JNS Timer</li>
<li>USB-C charging cables</li>
</ul>

There is **no physical JNS Gate in this particular test kit**. That does not stop you training: the controller can record useful reaction, acceleration and G-force data on its own, while JNS Lights provides the start sequence and JNS Timer provides an external finish reference.

The wider JNS Pro system is modular. Gate, Lights and Timer can be enabled independently in Gate Settings.

---

# Getting Started {#getting-started}

## Power up

Charge the controller, JNS Lights and JNS Timer before a session, then power on the devices you intend to use.

The supplied test hardware should already be paired. If one of the devices is not available, see [Device Pairing](#device-pairing).

## The ANO control

The rotary ANO control is the normal way to operate the current test firmware.

| Action | What it does |
|---|---|
| **Rotate** | Move focus through the available controls. |
| **Centre press** | Select the focused action or enter edit mode. |
| **Rotate while editing** | Change the selected value. |
| **Centre press / Right** | Confirm an edit or activate the focused action. |
| **Left** | Go back or cancel an edit. |

Only controls that are currently valid are offered to the ANO. During an active run the interface deliberately prevents you navigating away from Gate Pro.

---

# How JNS Pro Works {#how-this-system-works}

The controller contains its own IMU and records the core movement data for every run. External devices make the session more automated or add an external timing reference, but the controller remains the centre of the system.

The optional external units are:

- **JNS Gate** — physical start gate.
- **JNS Lights** — start-light sequence.
- **JNS Timer** — external finish timer.

The controller can therefore be used with any combination of those devices.

## Starting without a physical Gate

For this field-test kit, start from a wall, block, track stand or another repeatable position. JNS Lights provides the visual start sequence and the controller records your reaction and acceleration as you leave.

---

# Running a Training Session {#running-a-training-session}

## Your first run

1. From the main menu, open **Gate Pro**.
2. If **RESET** is shown, select it to prepare the enabled external devices.
3. When **START** is shown, get into position and select it when you are ready.
4. Wait for the start sequence.
5. Ride the run normally.
6. Review the finish result before continuing.

If no external devices are enabled, Gate Pro can skip the RESET stage and open directly in the ready-to-start state.

## Reset and Start

**RESET** prepares the system for a run. When the controller reaches the armed state, the live action becomes **START**.

Selecting **START** begins the start sequence. JNS Lights follows the configured sequence when enabled, while the controller begins recording the run data used for reaction, G-force and the post-run analysis.

## Abort

When Abort is the live action, the controller requires an intentional hold rather than a quick press. The screen shows **HOLD 0.3s TO ABORT**.

This safety hold applies only when Abort is live; normal Select/Right behaviour elsewhere is unaffected.

## During the run

The running screen keeps the live timing and G-force information visible while the controller records the full-resolution run data. Navigation is intentionally locked down so that an accidental input cannot leave Gate Pro mid-run.

<figure class="guide-figure guide-figure--screen">
  <img src="{{ '/img/current-ui/gate-running.webp' | relative_url }}" alt="Current Gate Pro running screen showing elapsed time and live run status" loading="lazy">
  <figcaption>Gate Pro during a run: the display stays deliberately simple so the rider can confirm recording and elapsed time at a glance.</figcaption>
</figure>

---

# Understanding Your Results {#results}

Every completed run reaches the **Finish** screen before the system moves on.

<div class="guide-figure-grid">
<figure class="guide-figure guide-figure--screen">
  <img src="{{ '/img/current-ui/finish-summary.webp' | relative_url }}" alt="Current Gate Pro Finish summary screen" loading="lazy">
  <figcaption><strong>Finish page 1:</strong> the quick result.</figcaption>
</figure>
<figure class="guide-figure guide-figure--screen">
  <img src="{{ '/img/current-ui/finish-details.webp' | relative_url }}" alt="Current Gate Pro Finish details screen" loading="lazy">
  <figcaption><strong>Finish page 2:</strong> deeper run analysis.</figcaption>
</figure>
</div>

## Finish page 1 — the quick result

The first page is the at-a-glance summary:

- **TIME** — elapsed run time.
- **REACTION** — detected reaction time.
- **MAX G** — maximum recorded G-force.
- **PEAK SPEED** — calculated peak speed when the analytics pass is valid.

This is the page to glance at between runs when you simply want to know how the attempt went.

## Finish page 2 — the detail view

The second page shows the acceleration curve and the deeper run metrics produced by the controller's analysis. This includes the detailed speed/acceleration and technique information used by the session data and Analytics upload.

Use **Right** to view the detail page and **Left** to return to the summary page.

Changing Finish pages cancels the automatic transition for that result, giving you as long as you need to inspect it. Select/centre continues when you are ready.

## Auto Return

If **Auto Return** is enabled in Gate Settings, an ordinary Finish result can continue automatically after about **25 seconds**. If Auto Return is disabled, no Finish auto-transition timer is armed.

---

# Sessions {#sessions}

Session Mode groups several runs together so you can compare consistency instead of treating every start as an isolated attempt.

The Gate Pro screen shows the current run/session count while Session Mode is enabled.

## Final run of a session

The final run still shows its Finish result first. When you continue from that result, JNS Pro presents the session save choices.

The available actions are:

- **Save** — store the session on the SD card.
- **Save & Upload** — save the session and prepare it for upload to JNS Pro Analytics.
- **Cancel** — discard the current recorded session and reset the session counter.

If Save & Upload is selected without saved WiFi credentials, JNS Pro falls back to saving the session locally rather than performing a pointless restart/upload attempt.

When an upload is prepared, the controller saves the file first, shows a restart message, then reboots into the upload flow with a clean heap.

---

# Gate Settings {#session-settings}

Gate Settings now uses a compact, ANO-first menu. The root categories are:

<figure class="guide-figure guide-figure--board">
  <img src="{{ '/img/current-ui/gate-settings-redesign.webp' | relative_url }}" alt="Current Gate Settings redesign showing the menu, Run Setup, Session, Distance and Audio Display screens" loading="lazy">
  <figcaption>The current Gate Settings design: focused rows use amber, while edit mode makes the active value unmistakable.</figcaption>
</figure>

| Page | What it controls |
|---|---|
| **Devices** | Controller mode and which external Gate, Timer and Lights are enabled. |
| **Run Setup** | G-force display range and Sprint timing setup. |
| **Session** | Session Mode and number of runs in a session. |
| **Distance** | Distance tracking and distance per run. |
| **Audio / Display** | Device volume, display brightness and Auto Return. |
| **Dashboard** | Live Dashboard QR / connection information. |
| **Account** | Analytics account-link status and unlink action. |

The focused row uses a subtle charcoal highlight, amber left marker and amber chevron. The title remains white so focus never makes the text harder to read.

## Run Setup

**G-FORCE** changes the visible G-force scale used by the run graph. It changes the display range, not the sensor measurement itself.

**SPRINT** controls the timed-run behaviour used when you are training without an external finish timer.

## Session

**SESSION MODE** enables multi-run sessions.

**RUNS PER SESSION** sets how many runs make up that session. When Session Mode is off, the dependent value is disabled and the ANO skips it.

## Distance

**DISTANCE TRACKING** enables the distance-based analysis.

**DISTANCE PER RUN** supports **5, 10, 15, 20, 25 or 30 metres**. When Distance Tracking is off, the ANO skips the distance value.

## Audio / Display

**VOLUME** and **BRIGHTNESS** are shown as percentages but retain their existing internal hardware ranges.

Select either row to edit it, rotate the ANO to adjust, then press to commit.

**AUTO RETURN** controls whether a completed Finish result may advance automatically.

## Devices

The Devices page contains:

- **CONTROLLER** — Gate trigger/controller mode.
- **START GATE** — enable or disable the external Gate.
- **TIMER** — enable or disable JNS Timer.
- **LIGHTS** — enable or disable JNS Lights.
- **CONNECT DEVICES** — open Device Pairing.

An enabled device is shown as **ON**. If you try to enable hardware that has not been paired, JNS Pro rejects the request and displays a warning instead of pretending the device exists.

---

# Device Pairing {#device-pairing}

The current Device Pairing screen is intentionally simple: one Pair action, three device rows and one overall status area.

<figure class="guide-figure guide-figure--screen guide-figure--pairing">
  <img src="{{ '/img/current-ui/device-pairing.webp' | relative_url }}" alt="Current JNS Pro Device Pairing screen showing Start Gate, Lights and Timer connection status" loading="lazy">
  <figcaption>Device Pairing keeps discovery and the three external-device states on one screen.</figcaption>
</figure>

## Pairing devices with the ANO

1. Open **Gate Settings → Devices → Connect Devices**.
2. Focus **PAIR DEVICES**.
3. Press the ANO centre button to begin discovery.
4. Power on the JNS device you want to pair.
5. Watch the Gate / Lights / Timer status dots as devices are found.

Pressing Pair again can stop discovery.

When all three possible external devices are paired, the overall state reports **ALL DEVICES CONNECTED**.

The three rows always mean:

- **G — START GATE**
- **L — LIGHTS**
- **T — TIMER**

For this field-test kit, the Gate row may remain unpaired because no physical Gate unit is supplied.

## Forgetting a device

With the ANO, focus a paired device row and press Select. JNS Pro opens a confirmation dialog with **No** as the safe default and **Forget** as the destructive action.

For builds where touch is enabled, holding a paired device area for about **2 seconds** performs the equivalent forget action. The large Pair control uses a **3-second touch hold** to start discovery.

Pairing information is saved so the controller can restore the known-device state the next time the page is opened.

---

# The Live Dashboard {#live-dashboard}

The Live Dashboard lets a nearby phone or tablet watch the session without crowding around the controller.

When the Dashboard setting is enabled, the controller can host the live dashboard and publish the current session state, live G-force, elapsed time and completed-run information.

The dashboard can also send the same high-level **Reset**, **Start** and **Abort** commands used on the controller. Those commands still pass through Gate Pro's normal state checks; remote control does not bypass the run-state safety rules.

Use **Gate Settings → Dashboard** to display the QR / connection information.

---

# Saving & Reviewing Your Sessions {#saving-reviewing}

Completed session files are stored on the SD card. A saved file can therefore survive a missing network connection and be uploaded later.

**Save & Upload** writes the session to SD before the upload/restart flow begins. This avoids making the network connection the only copy of the run data.

Uploaded sessions can be reviewed in **[JNS Pro Analytics](https://jnspro-analytics.vercel.app/)**.

---

# Field Test Notes {#field-test-notes}

Please use the system naturally rather than trying to second-guess what the software expects.

If something unexpected happens, the most useful report is usually:

1. what screen you were on,
2. what you were trying to do,
3. what you pressed or rotated,
4. what happened next,
5. and, if practical, a quick photo of the controller screen.

If a behaviour is confusing even though it technically works, please report that too. The point of field testing is not only to find crashes — it is to find places where the system fails to explain itself.

---

# Troubleshooting {#troubleshooting}

## A device is missing

Open **Gate Settings → Devices** and check whether that device is enabled. If it cannot be enabled because it has not been paired, open **Connect Devices** and run discovery again.

## Pairing cannot find a device

Make sure the external unit is powered on, stop and restart Pair Devices, and keep the unit close to the controller for the pairing attempt.

## A session will not upload

The session is saved to SD first. Check that WiFi has been configured, then use the saved-file/upload flow again when a network is available.

## I cannot leave Gate Pro during a run

That is intentional. The ANO navigation is locked to the live run action while the sequence/timing state is active so an accidental input cannot leave the page mid-run.

---

# JNS Pro Analytics {#analytics}

JNS Pro Analytics is the longer-term view of your training data. The controller gives immediate feedback at the track; Analytics is where saved sessions can be compared and reviewed in greater detail.

**[Open JNS Pro Analytics →](https://jnspro-analytics.vercel.app/)**

---

# Thank You {#thank-you}

Thanks for putting real laps through JNS Pro.

Bench testing tells us whether the code works. Riders tell us whether the product works.
