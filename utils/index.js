export function groupProjectsByCategory(projects) {
    const categories = [...new Set(projects.map(p => p.category))]
    return categories.map(category => ({
        category,
        projects: projects.filter(p => p.category == category),
    }))
}
