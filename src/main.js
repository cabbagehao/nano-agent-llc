// NanoAgent LLC - Interactive Application Logic

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  initNavbarScroll();
  initMobileNavigation();
  initPlaygroundTabs();
  initGenerativeSimulators();
  initChatWidget();
  initSupportForm();
});

/* 1. Background Particle Neural Canvas */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? '#8b5cf6' : '#06b6d4';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.fill();
    }
  }

  const particleCount = Math.min(Math.floor(window.innerWidth / 20), 60);
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${1 - dist / 130 * 0.8})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/* 2. Navbar Scroll Styling */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

function initMobileNavigation() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.nav-links');
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  };

  toggle.addEventListener('click', () => {
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) setOpen(false);
  });
}

/* 4. Playground Tabs Switcher */
function initPlaygroundTabs() {
  const tabs = document.querySelectorAll('.demo-tab');
  const panels = document.querySelectorAll('.demo-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const activePanel = document.getElementById(`panel-${target}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });
}

/* 5. Generative AI Simulators */
function initGenerativeSimulators() {
  // Image Generator Simulation
  const genImgBtn = document.getElementById('btn-gen-img');
  const imgBox = document.getElementById('preview-img-box');
  
  if (genImgBtn && imgBox) {
    genImgBtn.addEventListener('click', () => {
      imgBox.innerHTML = `
        <div class="loader-spinner"></div>
        <p style="color: #94a3b8; font-size: 0.9rem;">NanoVision AI rendering prompt...</p>
      `;
      setTimeout(() => {
        imgBox.innerHTML = `
          <img src="/images/nano_image_ai.jpg" alt="Generated AI Artwork" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-md);" />
          <div style="position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.7); backdrop-filter: blur(10px); padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; color: #06b6d4; border: 1px solid rgba(6,182,212,0.3);">
            ✓ 8K Ultra HD | Metal CoreML Engine
          </div>
        `;
      }, 1200);
    });
  }

  // Video Generator Simulation
  const genVidBtn = document.getElementById('btn-gen-vid');
  const vidBox = document.getElementById('preview-vid-box');

  if (genVidBtn && vidBox) {
    genVidBtn.addEventListener('click', () => {
      vidBox.innerHTML = `
        <div class="loader-spinner" style="border-top-color: #8b5cf6;"></div>
        <p style="color: #94a3b8; font-size: 0.9rem;">NanoFrame AI synthesizing 60fps video timeline...</p>
      `;
      setTimeout(() => {
        vidBox.innerHTML = `
          <img src="/images/nano_video_ai.jpg" alt="Rendered AI Video" style="width: 100%; height: 100%; object-fit: cover; border-radius: var(--radius-md);" />
          <div style="position: absolute; bottom: 10px; left: 10px; background: rgba(0,0,0,0.7); backdrop-filter: blur(10px); padding: 4px 10px; border-radius: 6px; font-size: 0.75rem; color: #8b5cf6; border: 1px solid rgba(139,92,246,0.3);">
            ▶ NanoFrame Timeline Rendered (4K 60fps)
          </div>
        `;
      }, 1500);
    });
  }

  // Audio Generator Simulation
  const genAudBtn = document.getElementById('btn-gen-aud');
  const audBox = document.getElementById('preview-aud-box');

  if (genAudBtn && audBox) {
    genAudBtn.addEventListener('click', () => {
      audBox.innerHTML = `
        <div class="loader-spinner" style="border-top-color: #d946ef;"></div>
        <p style="color: #94a3b8; font-size: 0.9rem;">NanoVoice AI synthesizing neural speech waveform...</p>
      `;
      setTimeout(() => {
        audBox.innerHTML = `
          <div class="preview-content">
            <h4 style="color: #d946ef; margin-bottom: 0.5rem;">🎙️ Voice Synthesized Successfully</h4>
            <div class="audio-waveform-visualizer">
              <div class="wave-bar" style="animation-delay: 0.1s;"></div>
              <div class="wave-bar" style="animation-delay: 0.3s;"></div>
              <div class="wave-bar" style="animation-delay: 0.2s;"></div>
              <div class="wave-bar" style="animation-delay: 0.5s;"></div>
              <div class="wave-bar" style="animation-delay: 0.4s;"></div>
              <div class="wave-bar" style="animation-delay: 0.2s;"></div>
              <div class="wave-bar" style="animation-delay: 0.6s;"></div>
              <div class="wave-bar" style="animation-delay: 0.3s;"></div>
            </div>
            <button class="btn btn-secondary" onclick="playWebAudioBeep()" style="font-size: 0.85rem; padding: 0.4rem 1rem;">▶ Play Synthesized Audio</button>
          </div>
        `;
      }, 1100);
    });
  }

  // Preset tag click helpers
  document.querySelectorAll('.tag-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetInputId = e.target.getAttribute('data-for');
      if (targetInputId) {
        const input = document.getElementById(targetInputId);
        if (input) input.value = e.target.textContent;
      }
    });
  });
}

// Web Audio API playback simulator for audio preview button
window.playWebAudioBeep = function() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.5);
    
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {
    console.log('Audio playback simulation');
  }
};

/* 6. AI Floating Chat Assistant Widget */
function initChatWidget() {
  const toggleBtn = document.getElementById('chat-widget-toggle');
  const chatBox = document.getElementById('ai-chat-box');
  const closeBtn = document.getElementById('chat-close-btn');
  const sendBtn = document.getElementById('chat-send-btn');
  const chatInput = document.getElementById('chat-input');
  const messagesContainer = document.getElementById('chat-messages');

  if (!toggleBtn || !chatBox) return;

  toggleBtn.addEventListener('click', () => {
    chatBox.classList.toggle('open');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      chatBox.classList.remove('open');
    });
  }

  function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;

    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'msg msg-user';
    userMsg.textContent = text;
    messagesContainer.appendChild(userMsg);
    chatInput.value = '';
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Simulate AI response
    setTimeout(() => {
      const aiMsg = document.createElement('div');
      aiMsg.className = 'msg msg-ai';
      
      let reply = "NanoAgent LLC delivers multi-modal AI SaaS (Image, Video, Audio) natively optimized for Apple Silicon, iOS, macOS, and Web APIs. You can explore our Privacy Policy, Support Portal, and API documentation directly from the navigation menu.";
      
      if (text.toLowerCase().includes('apple') || text.toLowerCase().includes('ios')) {
        reply = "NanoAgent LLC provides native Swift & CoreML SDKs with Metal hardware acceleration, ensuring zero-latency on-device inference for iOS, iPadOS, macOS, and visionOS applications.";
      } else if (text.toLowerCase().includes('image')) {
        reply = "NanoVision AI supports 8K generative image creation, real-time background extraction, depth synthesis, and custom model fine-tuning for enterprises.";
      } else if (text.toLowerCase().includes('contact') || text.includes('support')) {
        reply = "You can contact our support team at support@nanoagent.app or submit a ticket on our Support page. We respond within 24 hours!";
      }

      aiMsg.textContent = reply;
      messagesContainer.appendChild(aiMsg);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 800);
  }

  if (sendBtn && chatInput) {
    sendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }
}

/* 7. Support / Contact Form Handler */
function initSupportForm() {
  const form = document.getElementById('support-form');
  const alertBox = document.getElementById('support-alert');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ticketId = Math.floor(10000 + Math.random() * 90000);
      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = `
          <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); color: #34d399; padding: 1rem 1.25rem; border-radius: var(--radius-md); margin-top: 1rem;">
            <strong>Thank you! Your support ticket #NA-${ticketId}</strong><br/>
            <span> has been submitted. Our team responds within 24 hours.</span>
          </div>
        `;
      }
      form.reset();
    });
  }
}
