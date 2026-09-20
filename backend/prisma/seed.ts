import { PrismaClient, Role } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting Morphink Architecture database seeding...');

  // 1. Seed Superadmin User
  const adminEmail = 'admin@morphink.com';
  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  let adminUser = existingAdmin;
  if (!existingAdmin) {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash('Morphink@2026!', salt);

    adminUser = await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        name: 'Morphink SuperAdmin',
        role: Role.SUPERADMIN,
      },
    });
    console.log('✅ Created Superadmin user: admin@morphink.com (password: Morphink@2026!)');
  }

  // 2. Seed Categories
  const categories = [
    { slug: 'architectural-design', name: 'Architectural Design', type: 'blog', description: 'Innovative architectural concepts and structural designs' },
    { slug: 'sustainable-building', name: 'Sustainable Architecture', type: 'blog', description: 'Eco-friendly building materials and green construction' },
    { slug: 'interior-space', name: 'Interior & Spatial Planning', type: 'blog', description: 'Ergonomic interior design and spatial optimization' },
    { slug: 'urban-planning', name: 'Urban & Landscape Architecture', type: 'blog', description: 'Master planning, public infrastructure, and landscape design' },
    { slug: 'commercial-projects', name: 'Commercial & Residential', type: 'blog', description: 'Landmark corporate towers, luxury residences, and mixed-use spaces' },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: cat,
      create: cat,
    });
  }
  console.log(`✅ Seeded ${categories.length} content categories`);

  // 3. Seed Featured & Regular Blog Posts
  const blogPosts = [
    {
      slug: 'future-of-sustainable-urban-architecture',
      aliases: ['sustainable-building-trends-2026'],
      title: 'The Future of Sustainable Urban Architecture: Blending Form and Function',
      excerpt:
        'Discover how biophilic design, carbon-neutral construction materials, and passive solar planning are reshaping modern urban skylines.',
      category: 'sustainable-building',
      categoryLabel: 'Sustainable Architecture',
      author: 'Morphink Architectural Studio',
      authorRole: 'Principal Design Team',
      publishedDate: '15 Jul 2026',
      readTime: '6 min read',
      tileImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
      isFeatured: true,
      isPublished: true,
      tags: ['Sustainable Design', 'Biophilic Architecture', 'Urban Planning', 'Green Buildings'],
      highlightBadge: 'Featured Architecture Research',
      coverCaption: 'Designing resilient, eco-responsive spaces for modern living.',
      sections: [
        {
          heading: 'Redefining Architectural Aesthetics in the 21st Century',
          paragraphs: [
            'Architecture is more than structural engineering — it is the creation of lived experiences that harmonate with human emotion and environmental responsibility.',
            'At Morphink, our design ethos revolves around dynamic geometry, natural light integration, and climate-responsive facades.',
          ],
        },
      ],
      authorUserId: adminUser?.id,
    },
    {
      slug: 'spatial-optimization-in-commercial-towers',
      aliases: ['commercial-architecture-guide'],
      title: 'Spatial Optimization & Spatial Flow in High-Rise Commercial Towers',
      excerpt:
        'An in-depth study on maximizing occupant comfort, natural ventilation, and acoustic engineering in modern corporate headquarters.',
      category: 'commercial-projects',
      categoryLabel: 'Commercial & Residential',
      author: 'Morphink Design Lab',
      authorRole: 'Senior Architectural Consultants',
      publishedDate: '28 Jun 2026',
      readTime: '8 min read',
      tileImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
      isFeatured: false,
      isPublished: true,
      tags: ['Commercial Architecture', 'Spatial Flow', 'Corporate Infrastructure'],
      sections: [
        {
          heading: 'Principles of Modern Commercial Architecture',
          paragraphs: [
            'Commercial developments must balance high density with open, human-centric design. We explore adaptive floorplates and integrated green terraces.',
          ],
        },
      ],
      authorUserId: adminUser?.id,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post,
    });
  }
  console.log(`✅ Seeded ${blogPosts.length} blog posts`);

  // 4. Seed Career Openings
  const careerDomains = [
    {
      title: 'Senior Architectural Designer',
      department: 'Architectural Design',
      type: 'Full-Time',
      location: 'Bengaluru / Hybrid',
      skills: ['AutoCAD', 'Revit', 'Rhino 3D', 'BIM', 'Sustainable Design', 'Parametric Modeling'],
      description:
        'Lead conceptual architectural design, master planning, and facade detail development for landmark commercial and residential projects.',
      responsibilities: [
        'Develop 3D architectural models and parametric design concepts.',
        'Collaborate with structural engineers and client visionaries.',
        'Oversee project execution from schematic design through construction administration.',
      ],
      requirements: [
        'Bachelor or Master of Architecture (B.Arch / M.Arch).',
        '5+ years of experience in leading architectural design projects.',
      ],
      isPublished: true,
      sortOrder: 1,
    },
    {
      title: 'Interior & Spatial Architect',
      department: 'Interior Architecture',
      type: 'Full-Time',
      location: 'Bengaluru / Hybrid',
      skills: ['SketchUp', 'V-Ray', '3ds Max', 'Lighting Design', 'Material Selection', 'Spatial Planning'],
      description:
        'Transform interior volumes into high-end, immersive environments with bespoke material palettes, acoustics, and lighting design.',
      responsibilities: [
        'Draft detailed interior layouts, joinery drawings, and finish schedules.',
        'Conduct site inspections and quality audits during interior fit-outs.',
      ],
      requirements: [
        'Degree in Interior Architecture or Interior Design.',
        'Strong portfolio of corporate, hospitality, or luxury residential projects.',
      ],
      isPublished: true,
      sortOrder: 2,
    },
  ];

  for (const cd of careerDomains) {
    const existing = await prisma.careerDomain.findFirst({ where: { title: cd.title } });
    if (existing) {
      await prisma.careerDomain.update({ where: { id: existing.id }, data: cd });
    } else {
      await prisma.careerDomain.create({ data: cd });
    }
  }
  console.log(`✅ Seeded ${careerDomains.length} career openings`);

  // 5. Seed Testimonials
  const testimonials = [
    {
      name: 'Rajesh Varma',
      role: 'Chief Infrastructure Officer',
      organization: 'Apex Commercial Real Estate',
      content:
        'Morphink transformed our corporate headquarters vision into a magnificent 24-story sustainable tower. Their attention to parametric facade lighting and natural ventilation reduced our energy footprint by 35%.',
      rating: 5,
      category: 'Commercial Architecture',
      isFeatured: true,
      isPublished: true,
      sortOrder: 1,
    },
    {
      name: 'Anita Sundaram',
      role: 'Founder & Principal',
      organization: 'Vanguard Luxury Spaces',
      content:
        'Working with Morphink on our flagship residential enclave was an inspiring experience. Their architectural ingenuity and seamless project coordination delivered a timeless masterpiece.',
      rating: 5,
      category: 'Residential Design',
      isFeatured: true,
      isPublished: true,
      sortOrder: 2,
    },
  ];

  for (const t of testimonials) {
    const existing = await prisma.testimonial.findFirst({ where: { name: t.name, organization: t.organization } });
    if (existing) {
      await prisma.testimonial.update({ where: { id: existing.id }, data: t });
    } else {
      await prisma.testimonial.create({ data: t });
    }
  }
  console.log(`✅ Seeded ${testimonials.length} testimonials`);

  // 6. Seed Success Stories / Architectural Projects
  const stories = [
    {
      slug: 'vertex-eco-tower-bengaluru',
      title: 'Vertex Eco-Tower: A Landmark Carbon-Neutral Headquarters',
      personName: 'Apex Development Corp',
      personRole: 'Commercial Client',
      organization: 'Vertex Group',
      disabilityType: 'Architectural Excellence',
      summary:
        'How Morphink designed a net-zero commercial skyscraper featuring biophilic sky gardens, rainwater recycling, and high-performance glass facades.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      isFeatured: true,
      isPublished: true,
      sortOrder: 1,
    },
  ];

  for (const s of stories) {
    await prisma.story.upsert({
      where: { slug: s.slug },
      update: s,
      create: s,
    });
  }
  console.log(`✅ Seeded ${stories.length} success stories`);

  console.log('🎉 Morphink Architecture database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
