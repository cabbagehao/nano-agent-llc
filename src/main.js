// NanoAgent LLC - Interactive Application Logic

// Language State & Dictionary
let currentLang = 'en';

const i18n = {
  en: {
    nav_products: "AI Products",
    nav_features: "Core Engine",
    nav_playground: "Playground",
    nav_apple: "Apple Developer",
    nav_pricing: "Pricing",
    nav_about: "About Us",
    nav_contact: "Contact & Support",
    btn_get_started: "Get Started",
    hero_tag: "Next-Gen AI SaaS Engine for iOS, macOS & Web",
    hero_title: "Powering the Next Generation of <span class='gradient-text'>Image, Video & Audio AI</span>",
    hero_desc: "NanoAgent LLC delivers ultra-fast, multi-modal artificial intelligence SaaS solutions. Optimized for Apple Neural Engine & Metal performance.",
    btn_try_playground: "Try AI Playground",
    btn_developer_docs: "Developer Portal",
    apple_native: "Apple Silicon & Metal Accelerated",
    apple_privacy: "On-Device Privacy & CoreML SDK",
    stat_latency: "Sub-15ms Latency",
    stat_creations: "100M+ Media Assets",
    stat_uptime: "99.99% Uptime",
    stat_developers: "50,000+ Developers",
    sec_products_badge: "AI Product Portfolio",
    sec_products_title: "State-of-the-Art Multi-Modal AI SaaS",
    sec_products_sub: "Empowering creators and developers with enterprise-grade image, video, and audio generation tools.",
    img_ai_title: "NanoVision AI (Image Suite)",
    img_ai_desc: "Photorealistic 8K image generation, real-time background removal, neural upscale, and style synthesis.",
    vid_ai_title: "NanoFrame AI (Video Studio)",
    vid_ai_desc: "Text-to-video, temporal frame interpolation, 60fps AI enhancement, and lip-sync video avatar rendering.",
    aud_ai_title: "NanoVoice AI (Audio Engine)",
    aud_ai_desc: "Zero-shot voice cloning, neural text-to-speech, spatial audio isolation, and high-fidelity noise cancellation.",
    playground_title: "Interactive AI Playground",
    playground_sub: "Experience NanoAgent's high-speed inference engine directly in your browser.",
    tab_image: "Image Synthesis",
    tab_video: "Video Generation",
    tab_audio: "Voice & Speech",
    btn_generate_img: "Generate Image",
    btn_generate_vid: "Render Video",
    btn_generate_aud: "Synthesize Voice",
    apple_trust_title: "Built for Apple Developer & App Store Standards",
    apple_trust_desc: "NanoAgent LLC adheres strictly to Apple App Store Guidelines, GDPR, and enterprise privacy standards. Our Swift & Metal SDKs allow zero-latency edge AI integration on iPhone, iPad, Mac, and Apple Vision Pro.",
    support_ticket_success: "Thank you! Your support ticket #NA-",
    support_ticket_desc: " has been submitted. Our team responds within 24 hours.",
    chat_welcome: "Hello! I am NanoAgent AI Assistant. How can I assist you with our AI SaaS platform or Apple integration today?"
  },
  zh: {
    nav_products: "AI 产品阵列",
    nav_features: "核心引擎",
    nav_playground: "在线体验",
    nav_apple: "苹果开发者生态",
    nav_pricing: "价格方案",
    nav_about: "关于我们",
    nav_contact: "技术支持与联系",
    btn_get_started: "立即体验",
    hero_tag: "专为 iOS、macOS 和 Web 打造的下一代 AI SaaS 引擎",
    hero_title: "驱动下一代 <span class='gradient-text'>图像、视频与音频 AI</span> 创新",
    hero_desc: "NanoAgent LLC 致力于提供极速、多模态的通用人工智能 SaaS 解决方案，深度优化 Apple Neural Engine 与 Metal 硬件加速。",
    btn_try_playground: "体验 AI 游乐场",
    btn_developer_docs: "开发者文档",
    apple_native: "Apple Silicon 与 Metal 硬件加速",
    apple_privacy: "端侧隐私保护与 CoreML SDK",
    stat_latency: "低于 15ms 延迟",
    stat_creations: "生成超 1 亿项媒体内容",
    stat_uptime: "99.99% 高可用",
    stat_developers: "50,000+ 开发者使用",
    sec_products_badge: "AI 产品矩阵",
    sec_products_title: "前沿多模态 AI SaaS 解决方案",
    sec_products_sub: "为创作者与开发者赋能企业级图像、视频与音频智能生成工具。",
    img_ai_title: "NanoVision AI (图像生成)",
    img_ai_desc: "照片级 8K 图像生成、实时智能抠图、神经网络超分辨率升级与风格转换。",
    vid_ai_title: "NanoFrame AI (视频工作站)",
    vid_ai_desc: "文本生成视频、时域帧内插补、60fps AI画质增强与唇形同步数字人渲染。",
    aud_ai_title: "NanoVoice AI (语音音频引擎)",
    aud_ai_desc: "零样本声音克隆、神经网络文本转语音、空间音频隔离与高保真降噪处理。",
    playground_title: "互动 AI 演练中心",
    playground_sub: "在浏览器中实时体验 NanoAgent 高性能模型推断引擎。",
    tab_image: "图像合成",
    tab_video: "视频生成",
    tab_audio: "语音与音频",
    btn_generate_img: "开始生成图像",
    btn_generate_vid: "渲染生成视频",
    btn_generate_aud: "合成语音音频",
    apple_trust_title: "严格遵循苹果开发者与 App Store 审核标准",
    apple_trust_desc: "NanoAgent LLC 严格遵守 Apple App Store 指南、GDPR 及企业级隐私标准。我们的 Swift 与 Metal SDK 可以在 iPhone、iPad、Mac 及 Vision Pro 上提供极速端侧 AI 集成。",
    support_ticket_success: "提交成功！您的技术支持工单号 #NA-",
    support_ticket_desc: " 已生成。我们的技术支持团队将在 24 小时内与您联系。",
    chat_welcome: "您好！我是 NanoAgent AI 助手。请问有什么我可以帮您了解 NanoAgent LLC 的 AI 产品或苹果开发者集成的吗？"
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initBackgroundCanvas();
  initNavbarScroll();
  initLanguageToggle();
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

/* 3. Language Toggle (EN / ZH) */
function initLanguageToggle() {
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'zh' : 'en';
      langBtns.forEach(b => b.textContent = currentLang === 'en' ? '🌐 EN / 中文' : '🌐 中文 / EN');
      applyLanguage(currentLang);
    });
  });
}

function applyLanguage(lang) {
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    }
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
      
      if (text.toLowerCase().includes('apple') || text.includes('苹果') || text.toLowerCase().includes('ios')) {
        reply = "NanoAgent LLC provides native Swift & CoreML SDKs with Metal hardware acceleration, ensuring zero-latency on-device inference for iOS, iPadOS, macOS, and visionOS applications.";
      } else if (text.toLowerCase().includes('image') || text.includes('图像') || text.includes('图片')) {
        reply = "NanoVision AI supports 8K generative image creation, real-time background extraction, depth synthesis, and custom model fine-tuning for enterprises.";
      } else if (text.toLowerCase().includes('contact') || text.includes('support') || text.includes('联系') || text.includes('支持')) {
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
      const dict = i18n[currentLang];
      
      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = `
          <div style="background: rgba(16, 185, 129, 0.15); border: 1px solid rgba(16, 185, 129, 0.4); color: #34d399; padding: 1rem 1.25rem; border-radius: var(--radius-md); margin-top: 1rem;">
            <strong>${dict.support_ticket_success}${ticketId}</strong><br/>
            <span>${dict.support_ticket_desc}</span>
          </div>
        `;
      }
      form.reset();
    });
  }
}
