# Frontend Development Standards & Rules

## 1. Mobile Viewport Standards (MANDATORY)
All components MUST follow these viewport standards for screens <= 600px:
- Use viewport-fit class for full-height containers
- Follow mobile-container spacing rules
- Implement mobile-content padding standards
- Apply mobile-section margins
- Use mobile-text typography rules
- Follow mobile-image standards

## 2. Global Rules (MANDATORY)
These rules MUST be followed across ALL screen sizes:
- NO horizontal scrolling allowed on ANY screen size
- Content must stay within viewport bounds
- WhatsApp button must be present on all pages:
  - Fixed position bottom-left
  - z-index: 1000
  - Consistent sizing and animation
  - Brand color (#25D366)
  - Pulsing animation effect

## 3. UI Template Standards (MANDATORY)
All components MUST:
- Follow established responsive design patterns
- Meet accessibility standards (WCAG 2.1)
- Use consistent spacing and typography
- Implement proper color contrast
- Include hover and focus states
- Support keyboard navigation
- Provide proper ARIA labels

## 4. Component Building Standards (MANDATORY)
All new components MUST:
- Use blue placeholders (#1565c0) for image areas with darker blue hover states (#0d47a1)
- Include transition effects for hover states
- Maintain the same layout on mobile and desktop (with adjusted dimensions)
- Use descriptive prop interfaces with sensible defaults
- Include the component name in the display or comments
- Follow the established naming convention
- Be responsive across all screen sizes
- Include proper TypeScript typing
- Use "use client" directive for client components
- Follow the folder structure pattern

## 5. Critical Layout Rules
1. NO horizontal scrolling allowed on ANY screen size
2. NO gaps between navbar and hero section
3. Consistent spacing between all other sections
4. Content must stay within viewport bounds
5. Mobile-first responsive design required

## 6. Component Implementation Rules
1. Use early returns for cleaner code
2. Use Tailwind classes for styling
3. Use "class:" over ternary operators
4. Use descriptive variable/function names
5. Event handlers must be prefixed with "handle"
6. Implement proper accessibility features
7. Use const arrow functions
8. Define TypeScript types where possible

## 7. UI Validation Requirements
All components MUST pass:
- Responsive design tests (mobile, tablet, desktop)
- Accessibility compliance checks
- Cross-browser compatibility tests
- Performance benchmarks
- Color contrast requirements
- Touch target size requirements
- Loading state implementations
- Error state handling

## 8. Design System Consistency
Maintain consistent:
- Typography scale
- Color palette
- Spacing units
- Component patterns
- Interactive states
- Animation timings
- Shadow styles
- Border radiuses
Card layouts:
  - Equal heights within grid rows
  - Consistent padding and margins
  - Uniform image aspect ratios (16:9)
  - Equal content spacing

## 9. Testing Requirements
Components must include:
- Responsive breakpoint tests
- Touch/click interaction tests
- Keyboard navigation tests
- Screen reader compatibility
- Loading state tests
- Error state tests
- Animation performance tests

## 10. Documentation Requirements
Each component must document:
- Responsive behavior
- Accessibility features
- Props interface
- State management
- Event handlers
- Edge cases
- Usage examples

## 11. Performance Standards
Components must:
- Lazy load when appropriate
- Optimize images
- Minimize re-renders
- Use proper caching
- Implement proper loading states
- Handle errors gracefully
- Support offline functionality

## 12. Regular Maintenance
Schedule regular:
- UI compliance audits
- Performance reviews
- Accessibility checks
- Browser compatibility tests
- Mobile responsiveness tests
- Documentation updates
- Component library updates

## 13. Pre-Implementation Checklist
Before writing any component:
- [ ] Review mobile viewport standards
- [ ] Check global rules compliance
- [ ] Plan responsive behavior
- [ ] Consider accessibility requirements
- [ ] Review naming conventions
- [ ] Plan error states
- [ ] Consider loading states
- [ ] Review performance implications
- [ ] Plan for blue placeholders for images
- [ ] Design consistent hover states

## 14. Code Review Checklist
Before submitting code:
- [ ] No horizontal scroll possible
- [ ] Mobile viewport rules implemented
- [ ] Standard-rules class used
- [ ] Proper spacing maintained
- [ ] Accessibility features included
- [ ] TypeScript types defined
- [ ] Proper naming conventions followed
- [ ] No content overflow
- [ ] Loading states implemented
- [ ] Error states handled
- [ ] Tests written and passing
- [ ] Documentation updated
- [ ] Blue placeholders used for images
- [ ] Component follows established pattern