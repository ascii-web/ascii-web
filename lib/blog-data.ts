interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string[];
  readTime: string;
  image: string;
  asciiPreview: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  content: {
    introduction: string;
    sections: {
      title: string;
      content: string;
      codeExample?: string;
    }[];
    conclusion: string;
  };
}

// Sort blog posts by date function
const sortByDate = (posts: BlogPost[]) =>
  [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "evolution-of-ascii-art-in-modern-web-design",
    title: "The Evolution of ASCII Art in Modern Web Design",
    excerpt:
      "Discover how ASCII art is making a comeback in contemporary web design and digital branding...",
    date: "2025-07-22",
    category: ["Design Trends", "Case Studies"],
    readTime: "8 min",
    image: "/images/blog/blog-1.png",
    asciiPreview:
      "╔═══════════╗\n║  MODERN   ║\n║   ASCII   ║\n║    ART    ║\n╚═══════════╝",
    author: {
      name: "Sarah Chen",
      role: "Design Lead",
      bio: "Sarah is a design lead with over 10 years of experience in digital design and creative technology. She specializes in bridging the gap between retro computing aesthetics and modern web experiences.",
    },
    content: {
      introduction:
        "<a href='https://www.google.com/search?q=ascii+art&rlz=1C1CHBF_en-GBLK1098LK1098&oq=ASCII+art&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEJMTExM2owajE1qAIIsAIB8QVHYuFV0F_CFw&sourceid=chrome&ie=UTF-8'>ASCII art</a>, born in the early days of computing, is experiencing an unexpected renaissance in <a href='https://www.google.com/search?q=modern+web+design&sca_esv=35e16478e05ded5f&rlz=1C1CHBF_en-GBLK1098LK1098&sxsrf=AE3TifODv8zdGKxIfVmrER7Bpw9ofJt7og%3A1753340970575&ei=KtyBaMnyIuu9juMPn5etsQs&ved=0ahUKEwjJr-KN-NSOAxXrnmMGHZ9LK7YQ4dUDCBA&uact=5&oq=modern+web+design&gs_lp=Egxnd3Mtd2l6LXNlcnAiEW1vZGVybiB3ZWIgZGVzaWduMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiMDFD3BFj3BHABeAGQAQCYAawCoAGsAqoBAzMtMbgBA8gBAPgBAfgBApgCAqACugKoAhTCAgcQIxgnGOoCwgINEC4Y0QMYxwEYJxjqAsICExAAGIAEGEMYtAIYigUY6gLYAQGYAwjxBY5YKEGU-ThDugYGCAEQARgBkgcFMS4zLTGgB7oFsgcDMy0xuAexAsIHAzItMsgHDA&sclient=gws-wiz-serp'>modern web design</a>. This resurgence isn't merely nostalgia – it represents a fascinating intersection of <a href='https://www.google.com/search?q=retro+computing+aesthetics&sca_esv=35e16478e05ded5f&rlz=1C1CHBF_en-GBLK1098LK1098&sxsrf=AE3TifPwt-yiJx9BLs9ptLBY6if910KD-w%3A1753340985966&ei=OdyBaKzWOoq54-EP7M3ziQc&ved=0ahUKEwjs1o2V-NSOAxWK3DgGHezmPHEQ4dUDCBA&uact=5&oq=retro+computing+aesthetics&gs_lp=Egxnd3Mtd2l6LXNlcnAiGnJldHJvIGNvbXB1dGluZyBhZXN0aGV0aWNzMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgsQABiABBiGAxiKBTILEAAYgAQYhgMYigUyCxAAGIAEGIYDGIoFMggQABiiBBiJBTIFEAAY7wVI_AdQtwRYtwRwAXgBkAEAmAGmAqABpgKqAQMyLTG4AQPIAQD4AQH4AQKYAgKgAq4CqAIUwgIHECMYJxjqAsICDRAuGNEDGMcBGCcY6gLCAhkQLhiABBjRAxhDGLQCGMcBGIoFGOoC2AEBwgITEAAYgAQYQxi0AhiKBRjqAtgBAcICFBAAGIAEGOMEGLQCGOkEGOoC2AEBmAME8QVMMdnMrp_bvroGBggBEAEYAZIHBTEuMC4xoAeqBbIHAzItMbgHqgLCBwMyLTLIBwc&sclient=gws-wiz-serp'>retro computing aesthetics</a> and contemporary digital experiences.",
      sections: [
        {
          title: "The Historical Context",
          content:
            "<a href='https://www.google.com/search?q=ascii+art&rlz=1C1CHBF_en-GBLK1098LK1098&oq=ASCII+art&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEJMTExM2owajE1qAIIsAIB8QVHYuFV0F_CFw&sourceid=chrome&ie=UTF-8'>ASCII art</a> emerged in the 1960s when computer systems were limited to text-based displays. What began as a practical solution for creating graphics using available characters evolved into an art form. Early bulletin board systems (BBS) and email systems heavily utilized <a href='https://www.google.com/search?q=ascii+art&rlz=1C1CHBF_en-GBLK1098LK1098&oq=ASCII+art&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEJMTExM2owajE1qAIIsAIB8QVHYuFV0F_CFw&sourceid=chrome&ie=UTF-8'>ASCII art</a> for everything from logos to elaborate illustrations.",
        },
        {
          title: "The Modern Revival",
          content:
            "Today's revival of <a href='https://www.google.com/search?q=ascii+art&rlz=1C1CHBF_en-GBLK1098LK1098&oq=ASCII+art&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEJMTExM2owajE1qAIIsAIB8QVHYuFV0F_CFw&sourceid=chrome&ie=UTF-8'>ASCII art</a> in <a href='https://www.google.com/search?q=modern+web+design&sca_esv=35e16478e05ded5f&rlz=1C1CHBF_en-GBLK1098LK1098&sxsrf=AE3TifODv8zdGKxIfVmrER7Bpw9ofJt7og%3A1753340970575&ei=KtyBaMnyIuu9juMPn5etsQs&ved=0ahUKEwjJr-KN-NSOAxXrnmMGHZ9LK7YQ4dUDCBA&uact=5&oq=modern+web+design&gs_lp=Egxnd3Mtd2l6LXNlcnAiEW1vZGVybiB3ZWIgZGVzaWduMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEiMDFD3BFj3BHABeAGQAQCYAawCoAGsAqoBAzMtMbgBA8gBAPgBAfgBApgCAqACugKoAhTCAgcQIxgnGOoCwgINEC4Y0QMYxwEYJxjqAsICExAAGIAEGEMYtAIYigUY6gLYAQGYAwjxBY5YKEGU-ThDugYGCAEQARgBkgcFMS4zLTGgB7oFsgcDMy0xuAexAsIHAzItMsgHDA&sclient=gws-wiz-serp'>web design</a> isn't about limitations – it's about creative choice. Modern designers are incorporating ASCII elements to create unique, memorable experiences that stand out in an era of polished, sometimes sterile digital interfaces. This renaissance is particularly evident in indie game development, tech startup branding, and cyberpunk-inspired web experiences.",
        },
        {
          title: "Design Psychology",
          content:
            "The appeal of ASCII art in modern design taps into several psychological factors. The raw, minimalist nature of ASCII creates a sense of authenticity and techno-nostalgia that resonates with both tech-savvy audiences and those seeking more 'human' digital experiences. Studies have shown that introducing intentional constraints or 'primitive' elements can actually increase user engagement and memory retention.",
        },
        {
          title: "Technical Implementation",
          content:
            "Modern ASCII art implementation in web design goes far beyond simple pre-formatted text blocks. Designers are now using advanced CSS and JavaScript to create responsive, interactive ASCII elements that scale and adapt to different screen sizes.",
          codeExample:
            "const AsciiArt = styled.pre`\n  font-family: monospace;\n  line-height: 1.2;\n  letter-spacing: 0.1em;\n  @media (max-width: 768px) {\n    font-size: 0.8em;\n  }\n`;",
        },
      ],
      conclusion:
        "As we continue to see the evolution of web design, ASCII art represents more than just a throwback to computing's early days. It's a reminder that creativity often flourishes within constraints.",
    },
  },
  {
    id: "2",
    slug: "mastering-ai-powered-ascii-art-generation",
    title: "Mastering AI-Powered ASCII Art Generation",
    excerpt:
      "Deep dive into the world of AI-assisted ASCII art creation, exploring advanced techniques and best practices...",
    date: "2025-07-21",
    category: ["AI & Tech", "Tutorials"],
    readTime: "12 min",
    image: "/images/blog/blog-2.png",
    asciiPreview:
      "  _____   _\n |_   _| /\\\\   ___\n   | |  /  \\\\ / __|\n   | | / /\\\\ \\\\__ \\\n   |_|/_/  \\_\\___/",
    author: {
      name: "Dr. Maya Patel",
      role: "AI Research Lead",
      bio: "Dr. Maya Patel leads AI research at ASCII Web, focusing on the intersection of artificial intelligence and creative expression. She holds a Ph.D. in Computer Science with a specialization in generative AI systems.",
    },
    content: {
      introduction:
        "The intersection of <a href='https://www.google.com/search?q=artificial+intelligence&sca_esv=35e16478e05ded5f&rlz=1C1CHBF_en-GBLK1098LK1098&sxsrf=AE3TifMBu7vOwG6O4uCAfdnhs1PStM6ilA%3A1753341124324&ei=xNyBaLXIE8Gv4-EPjs2M6AM&ved=0ahUKEwi1uorX-NSOAxXB1zgGHY4mAz0Q4dUDCBA&uact=5&oq=artificial+intelligence&gs_lp=Egxnd3Mtd2l6LXNlcnAiF2FydGlmaWNpYWwgaW50ZWxsaWdlbmNlMgoQABiABBhDGIoFMhEQABiABBiRAhixAxiDARiKBTILEAAYgAQYkQIYigUyCxAAGIAEGJECGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgUQLhiABDIFEAAYgAQyBRAAGIAESIgLUIwFWIwFcAF4AZABAJgBuAOgAbgDqgEDNC0xuAEDyAEA-AEB-AECmAICoALCA6gCEcICBxAjGCcY6gLCAg0QLhjRAxjHARgnGOoCwgIUEAAYgAQY4wQYtAIY6QQY6gLYAQGYAwTxBdH8H6EZnaz7ugYGCAEQARgBkgcFMS40LTGgB5AJsgcDNC0xuAe-A8IHAzItMsgHCA&sclient=gws-wiz-serp'>artificial intelligence</a> and <a href='https://www.google.com/search?q=ascii+art&rlz=1C1CHBF_en-GBLK1098LK1098&oq=ASCII+art&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgcIARAAGIAEMgcIAhAAGIAEMgcIAxAAGIAEMgcIBBAAGIAEMgcIBRAAGIAEMgcIBhAAGIAEMgcIBxAAGIAEMgcICBAAGIAEMgcICRAAGIAE0gEJMTExM2owajE1qAIIsAIB8QVHYuFV0F_CFw&sourceid=chrome&ie=UTF-8'>ASCII art</a> represents a fascinating evolution in digital creativity. As AI technologies advance, we're discovering new ways to generate, manipulate, and optimize <a href='https://www.google.com/search?q=ASCII+art+generation&sca_esv=35e16478e05ded5f&rlz=1C1CHBF_en-GBLK1098LK1098&sxsrf=AE3TifNiugyomuxAbhO0FyQ2Wns7fAtzPQ%3A1753341136128&ei=0NyBaKPQB6-L4-EPu4PtmA8&ved=0ahUKEwij-Nrc-NSOAxWvxTgGHbtBG_MQ4dUDCBA&uact=5&oq=ASCII+art+generation&gs_lp=Egxnd3Mtd2l6LXNlcnAiFEFTQ0lJIGFydCBnZW5lcmF0aW9uMgsQABiABBiRAhiKBTIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCkiaCVDhBFjhBHABeAGQAQCYAcoCoAHKAqoBAzMtMbgBA8gBAPgBAfgBApgCAqAC1gKoAhTCAgcQIxgnGOoCwgINEC4Y0QMYxwEYJxjqAsICExAAGIAEGEMYtAIYigUY6gLYAQHCAhMQLhiABBhDGLQCGIoFGOoC2AEBmAMI8QVQ-bFQB9M5sroGBggBEAEYAZIHBTEuMy0xoAeVCLIHAzMtMbgHzQLCBwUwLjEuMcgHCQ&sclient=gws-wiz-serp'>ASCII art</a> that pushes the boundaries of what's possible.",
      sections: [
        {
          title: "Understanding AI-Powered ASCII Art Generation",
          content:
            "<a href='https://www.google.com/search?q=AI-powered+ASCII+art&sca_esv=35e16478e05ded5f&rlz=1C1CHBF_en-GBLK1098LK1098&sxsrf=AE3TifMh59bzYNTL3GKjg6EKtHonOmHnQQ%3A1753340998694&ei=RtyBaI6PKsHF4-EP96r6gAY&ved=0ahUKEwiOypab-NSOAxXB4jgGHXeVHmAQ4dUDCBA&uact=5&oq=AI-powered+ASCII+art&gs_lp=Egxnd3Mtd2l6LXNlcnAiFEFJLXBvd2VyZWQgQVNDSUkgYXJ0MgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMg0QLhjRAxjHARgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMgcQIxgnGOoCMhQQABiABBiRAhi0AhiKBRjqAtgBATIUEAAYgAQYkQIYtAIYigUY6gLYAQEyFBAAGIAEGJECGLQCGIoFGOoC2AEBMhQQABiABBiRAhi0AhiKBRjqAtgBATIUEAAYgAQYkQIYtAIYigUY6gLYAQEyFBAAGIAEGOMEGLQCGOkEGOoC2AEBMhQQABiABBjjBBi0AhjpBBjqAtgBAUi_CVC4BVi4BXABeAGQAQCYAQCgAQCqAQC4AQPIAQD4AQH4AQKYAgGgAgSoAhGYAwTxBSJTUE7RCv_dugYGCAEQARgBkgcBMaAHALIHALgHAMIHAzItMcgHAw&sclient=gws-wiz-serp'>AI-powered ASCII art generation</a> uses sophisticated neural networks trained on vast datasets of images and their ASCII representations. These systems learn to recognize patterns, understand visual hierarchies, and make intelligent decisions about character placement.",
        },
        {
          title: "Deep Learning Architectures",
          content:
            "Modern <a href='https://www.google.com/search?q=ASCII+art+generation&sca_esv=35e16478e05ded5f&rlz=1C1CHBF_en-GBLK1098LK1098&sxsrf=AE3TifNiugyomuxAbhO0FyQ2Wns7fAtzPQ%3A1753341136128&ei=0NyBaKPQB6-L4-EPu4PtmA8&ved=0ahUKEwij-Nrc-NSOAxWvxTgGHbtBG_MQ4dUDCBA&uact=5&oq=ASCII+art+generation&gs_lp=Egxnd3Mtd2l6LXNlcnAiFEFTQ0lJIGFydCBnZW5lcmF0aW9uMgsQABiABBiRAhiKBTIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCkiaCVDhBFjhBHABeAGQAQCYAcoCoAHKAqoBAzMtMbgBA8gBAPgBAfgBApgCAqAC1gKoAhTCAgcQIxgnGOoCwgINEC4Y0QMYxwEYJxjqAsICExAAGIAEGEMYtAIYigUY6gLYAQHCAhMQLhiABBhDGLQCGIoFGOoC2AEBmAMI8QVQ-bFQB9M5sroGBggBEAEYAZIHBTEuMy0xoAeVCLIHAzMtMbgHzQLCBwUwLjEuMcgHCQ&sclient=gws-wiz-serp'>ASCII art generation</a> relies heavily on convolutional neural networks (CNNs) and transformer architectures. These systems analyze input images at multiple levels of abstraction, considering factors like contrast, edges, and spatial relationships to make intelligent character selections. Advanced models can even learn style preferences and maintain consistent artistic choices across multiple generations.",
          codeExample:
            "async function generateAsciiArt(image, style = 'detailed') {\n  const model = await loadAsciiModel();\n  const config = {\n    charset: style === 'minimal' ? MINIMAL_CHARS : DETAILED_CHARS,\n    preserveAspectRatio: true,\n    enhanceContrast: true\n  };\n  return model.predict(preprocessImage(image, config));\n}",
        },
        {
          title: "Style Transfer and Customization",
          content:
            "One of the most exciting developments in AI-powered ASCII art is the ability to perform style transfer. By training models on specific ASCII art styles or artists, we can generate new pieces that maintain consistent stylistic choices. This opens up possibilities for branded ASCII art that maintains corporate identity while leveraging AI efficiency.",
          codeExample:
            "class AsciiStyleTransfer {\n  constructor(styleConfig) {\n    this.styleVectors = styleConfig.vectors;\n    this.characterSet = styleConfig.preferredChars;\n  }\n\n  async applyStyle(asciiArt) {\n    return this.transformer.transform(asciiArt, {\n      style: this.styleVectors,\n      charset: this.characterSet\n    });\n  }\n}",
        },
      ],
      conclusion:
        "AI-powered ASCII art generation represents a perfect fusion of traditional text art and modern technology. The future promises even more exciting possibilities as we continue to push the boundaries of what's possible.",
    },
  },
  {
    id: "3",
    slug: "future-of-creative-coding-ascii-art",
    title:
      "The Future of Creative Coding: ASCII Art in Interactive Experiences",
    excerpt:
      "Explore how creative coders are pushing the boundaries of ASCII art in interactive digital experiences...",
    date: "2025-07-20",
    category: ["Creative Coding", "Innovation"],
    readTime: "10 min",
    image: "/images/blog/blog-3.png",
    asciiPreview: " /\\\\ /\\\\\n( o.o )\n > ^ <",
    author: {
      name: "Marcus Wong",
      role: "Creative Technologist",
      bio: "Marcus is a creative technologist specializing in interactive installations and digital experiences. With a background in both art and computer science, he creates unique digital experiences that bridge technology and creativity.",
    },
    content: {
      introduction:
        "Creative coding has revolutionized the way we think about ASCII art, transforming it from static text displays into dynamic, interactive experiences.",
      sections: [
        {
          title: "Interactive ASCII Art",
          content:
            "Interactive ASCII art represents a new frontier in digital expression, where text-based graphics respond to user input, environmental data, or real-time events.",
        },
        {
          title: "Real-time Animation",
          content:
            "Modern browsers and JavaScript engines enable smooth, real-time ASCII animations using requestAnimationFrame and WebGL. These technologies allow for complex animations with minimal performance impact, opening up new possibilities for interactive ASCII experiences.",
          codeExample:
            "class AsciiAnimation {\n  constructor(config) {\n    this.frameBuffer = new DoubleBuffer();\n    this.renderer = new WebGLAsciiRenderer(config);\n    this.lastFrame = performance.now();\n  }\n\n  animate() {\n    requestAnimationFrame(() => {\n      const now = performance.now();\n      const delta = now - this.lastFrame;\n      this.update(delta);\n      this.render();\n      this.frameBuffer.swap();\n      this.lastFrame = now;\n      this.animate();\n    });\n  }\n\n  update(delta) {\n    this.physics.step(delta);\n    this.particles.update(delta);\n  }\n}",
        },
        {
          title: "Performance Optimization",
          content:
            "Creating smooth ASCII animations requires careful performance optimization. Techniques like double buffering, WebGL acceleration, and efficient character lookup tables help maintain high framerates even with complex animations.",
          codeExample:
            "class WebGLAsciiRenderer {\n  constructor() {\n    this.lookupTexture = this.createCharacterLookup();\n    this.shader = new ShaderProgram({\n      vertex: ASCII_VERTEX_SHADER,\n      fragment: ASCII_FRAGMENT_SHADER\n    });\n  }\n\n  createCharacterLookup() {\n    // Pre-render ASCII characters to a texture atlas\n    // for efficient GPU-based rendering\n    return createTextureAtlas(ASCII_CHARS);\n  }\n}",
        },
      ],
      conclusion:
        "The future of creative coding in ASCII art is bright, with new technologies and techniques emerging regularly. As browsers become more powerful and new APIs become available, we can expect to see even more innovative uses of ASCII art in interactive digital experiences. The combination of WebGL, modern JavaScript features, and creative coding frameworks is pushing the boundaries of what's possible with ASCII art.",
    },
  },
  {
    id: "4",
    slug: "accessibility-and-ascii-art",
    title: "Making ASCII Art Accessible: Best Practices and Guidelines",
    excerpt:
      "Learn how to create inclusive ASCII art experiences that work for everyone, including screen reader users and keyboard navigators...",
    date: "2025-07-19",
    category: ["Accessibility", "Best Practices"],
    readTime: "15 min",
    image: "/images/blog/blog-4.png",
    asciiPreview: "♿ == [A11Y] ==\n{  ASCII  }\n[  FOR   ]\n<< ALL >>",
    author: {
      name: "Alex Rivera",
      role: "Accessibility Specialist",
      bio: "Alex is an accessibility specialist with a passion for making digital art forms inclusive. They have contributed to several W3C guidelines and regularly consult on making creative digital experiences accessible to all users.",
    },
    content: {
      introduction:
        "ASCII art poses unique challenges and opportunities for web accessibility. While it's a visual art form, proper implementation can make it engaging and meaningful for all users, including those relying on assistive technologies.",
      sections: [
        {
          title: "Understanding the Challenges",
          content:
            "ASCII art presents several accessibility challenges: it's inherently visual, often lacks semantic meaning, and can be difficult for screen readers to interpret. However, with proper techniques and consideration, we can make ASCII art experiences more inclusive without sacrificing their creative impact.",
        },
        {
          title: "Semantic Structure",
          content:
            "The key to accessible ASCII art is providing proper semantic structure and alternative content. This includes appropriate ARIA labels, meaningful alt text, and semantic HTML that conveys the purpose and content of the ASCII art.",
          codeExample:
            'const AccessibleAscii = () => (\n  <figure\n    role="img"\n    aria-label="A cute ASCII cat face made of brackets and symbols"\n  >\n    <pre className="ascii-art" aria-hidden="true">\n      /\\___/\\\n     (  o o  )\n     (  =^=  )\n      (____)\n    </pre>\n    <figcaption className="sr-only">\n      A playful cat face created using ASCII characters,\n      showing pointed ears, round eyes, and whiskers.\n    </figcaption>\n  </figure>\n);',
        },
        {
          title: "Interactive Experiences",
          content:
            "When creating interactive ASCII art experiences, ensure all interactions are keyboard-accessible and provide clear feedback. Use ARIA live regions to announce dynamic changes, and consider providing alternative ways to interact with the content.",
          codeExample:
            "class AccessibleAsciiGame {\n  constructor() {\n    this.setupKeyboardControls();\n    this.setupAnnouncements();\n  }\n\n  setupKeyboardControls() {\n    const controls = [\n      { key: 'ArrowUp', action: 'Move up' },\n      { key: 'ArrowDown', action: 'Move down' },\n      // ... more controls\n    ];\n    this.keyboardHandler = new KeyboardHandler(controls);\n  }\n\n  setupAnnouncements() {\n    this.announcer = new ARIALiveRegion({\n      level: 'polite',\n      delay: 500\n    });\n  }\n}",
        },
        {
          title: "Progressive Enhancement",
          content:
            "Implement ASCII art using progressive enhancement principles. Start with semantic, accessible content, then layer on visual and interactive enhancements. This ensures the experience degrades gracefully when assistive technologies are used.",
        },
      ],
      conclusion:
        "Creating accessible ASCII art is not just about compliance—it's about ensuring everyone can appreciate and engage with this unique art form. By following these best practices and continuously testing with assistive technologies, we can create ASCII art experiences that are both creative and inclusive.",
    },
  },
];

export const getAllBlogPosts = () => sortByDate(BLOG_POSTS);

export const getBlogPost = (slug: string) =>
  BLOG_POSTS.find((post) => post.slug === slug);

export const getRecentBlogPosts = (count: number = 3) =>
  sortByDate(BLOG_POSTS).slice(0, count);

export const BLOG_CATEGORIES = Array.from(
  new Set(BLOG_POSTS.flatMap((post) => post.category))
).sort();
